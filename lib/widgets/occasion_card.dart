import 'dart:ui';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/form_feature.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/dialogs/occasion_detail_dialog.dart';
import 'package:cached_network_image/cached_network_image.dart';

class OccasionCard extends StatefulWidget {
  static const double kCardBorderRadius = 15.0;
  static const double kPresentBorderWidth = 4.0;
  static const double kMinCardWidth = 300.0;
  static const double kMinCardHeight = 150.0;
  static const Duration kAnimationDuration = Duration(milliseconds: 200);
  static const double kCardWidth = 16.0;
  static const double kCardHeight = 9.0;

  final OccasionModel occasion;
  final bool isPast;
  final bool isPresent;

  const OccasionCard({
    super.key,
    required this.occasion,
    this.isPast = false,
    this.isPresent = false,
  });

  @override
  _OccasionCardState createState() => _OccasionCardState();
}

class _OccasionCardState extends State<OccasionCard> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    final Border? border = widget.isPresent
        ? Border.all(
      color: Theme.of(context).primaryColor,
      width: OccasionCard.kPresentBorderWidth,
    )
        : null;

    final double innerRadius = widget.isPresent
        ? OccasionCard.kCardBorderRadius - OccasionCard.kPresentBorderWidth
        : OccasionCard.kCardBorderRadius;

    // Retrieve external price from the 'form' feature, if available.
    var details = FeatureService.getFeatureDetails(
      FeatureConstants.form,
      features: widget.occasion.features,
    );
    String? externalPrice = details is FormFeature
        ? details.formExternalPrice
        : null;

    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: RepaintBoundary(  // ← cache the entire card (including its BackdropFilters)
        child: LayoutBuilder(builder: (context, constraints) {
          final double widthScale = (constraints.maxWidth /
              OccasionCard.kMinCardWidth)
              .clamp(1.0, 1.5);
          final double heightScale = (constraints.maxHeight /
              OccasionCard.kMinCardHeight)
              .clamp(1.0, 1.2);
          final double buttonScale = (widthScale + heightScale) / 2;

          return ConstrainedBox(
            constraints: const BoxConstraints(
              minWidth: OccasionCard.kMinCardWidth,
              minHeight: OccasionCard.kMinCardHeight,
            ),
            child: AnimatedContainer(
              duration: OccasionCard.kAnimationDuration,
              decoration: BoxDecoration(
                borderRadius:
                BorderRadius.circular(OccasionCard.kCardBorderRadius),
                border: border,
                boxShadow: [
                  if (widget.isPresent)
                    BoxShadow(
                      color: Theme.of(context)
                          .primaryColor
                          .withOpacity(0.6),
                      blurRadius: 20,
                      spreadRadius: 4,
                    ),
                  BoxShadow(
                    color: isHovered ? Colors.black26 : Colors.black12,
                    blurRadius: isHovered ? 8 : 4,
                    offset:
                    isHovered ? const Offset(0, 4) : const Offset(0, 2),
                  ),
                ],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(innerRadius),
                child: Stack(
                  children: [
                    if (widget.occasion
                        .data?[Tb.occasions.data_image] !=
                        null)
                      Positioned.fill(
                        child: CachedNetworkImage(
                          imageUrl: widget.occasion
                              .data![Tb.occasions.data_image]!,
                          fit: BoxFit.cover,
                        ),
                      ),

                    if (widget.isPast)
                      Positioned.fill(
                        child: Container(
                          color: Colors.grey.withOpacity(0.6),
                        ),
                      ),

                    // External price badge with cached blur
                    if (externalPrice != null &&
                        externalPrice.trim().isNotEmpty)
                      Positioned(
                        top: 8,
                        right: 8,
                        child: RepaintBoundary( // ← cache this blurred badge only
                          child: ClipRect(
                            child: BackdropFilter(
                              filter:
                              ImageFilter.blur(sigmaX: 5, sigmaY: 5),
                              child: Container(
                                padding:
                                const EdgeInsets.symmetric(
                                    horizontal: 12, vertical: 6),
                                decoration: BoxDecoration(
                                  color: Colors.black.withOpacity(0.6),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: SelectableText(
                                  externalPrice,
                                  style: const TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 18,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),

                    // Bottom overlay with cached blur
                    Positioned(
                      left: 0,
                      right: 0,
                      bottom: 0,
                      child: RepaintBoundary( // ← cache this blurred footer only
                        child: ClipRect(
                          child: BackdropFilter(
                            filter:
                            ImageFilter.blur(sigmaX: 5, sigmaY: 5),
                            child: Container(
                              padding: const EdgeInsets.all(8.0),
                              color: Colors.black.withOpacity(0.4),
                              child: Column(
                                crossAxisAlignment:
                                CrossAxisAlignment.start,
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  SelectableText(
                                    widget.occasion.title ?? '',
                                    style: const TextStyle(
                                      color: Colors.white,
                                      fontSize: 18,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  SelectableText(
                                    TimeHelper.getMinimalisticDateRange(
                                      context,
                                      widget.occasion.startTime!,
                                      widget.occasion.endTime!,
                                    ),
                                    style: const TextStyle(
                                      color: Colors.white,
                                      fontSize: 14,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),

                    // Detail button
                    Positioned(
                      bottom: 6 * buttonScale,
                      right: 10 * buttonScale,
                      child: OutlinedButton(
                        onPressed: () async {
                          if (!FeatureService.isFeatureEnabled(
                              FeatureConstants.form,
                              features: widget.occasion.features)) {
                            try {
                              await RightsService.updateOccasionData(
                                  link: widget.occasion.link, force: true);
                            } catch (e) {
                              // ignore
                            }
                            await RouterService.navigateOccasion(
                                context, "");
                          } else {
                            showDialog(
                              context: context,
                              builder: (context) =>
                                  OccasionDetailDialog(
                                      occasion: widget.occasion),
                            );
                          }
                        },
                        style: OutlinedButton.styleFrom(
                          side: const BorderSide(color: Colors.white),
                          padding: EdgeInsets.symmetric(
                            horizontal: 16 * buttonScale,
                            vertical: 8 * buttonScale,
                          ),
                          minimumSize: Size(
                              112 * buttonScale, 36 * buttonScale),
                        ),
                        child: Text(
                          "Detail".tr(),
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 14 * buttonScale,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        }),
      ),
    );
  }
}
