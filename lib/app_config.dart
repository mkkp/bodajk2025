import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/language_model.dart';

class AppConfig {
  static const String supabaseUrl = 'https://cxnyncyatcgwjuotolmx.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4bnluY3lhdGNnd2p1b3RvbG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4ODQ0MzYsImV4cCI6MjA2NjQ2MDQzNn0.OnLs9Y4xI-s8hv5YCgtSKozjl0m8yQiMSMS0KTT5iok';
  static const String appName = 'Bodajk 2025';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const String oneSignalAppId = 'c40922d2-b885-48c0-976f-55b489490f58';

  static const int organization = 1;
  //setup occasion id to force occasion
  static const String? forceOccasionLink = null;
  static const bool isPublicNotificationSendingDisabled = false;
  static const bool isAllUnit = false;
  static const bool isAppSupported = true;

  static const String webLink = "https://mkkp.github.io/bodajk2025/";
  static const String appStoreLink = "";
  static const String playStoreLink = "";
  static const String playStoreLaunchLink = "";
  static const String desktopAppLink = "";
  static bool isProLicense = true;
  static const int imagesMaxWidth = 780;
  static const int imagesMaxBytes = 800000;

  static const int daySplitHour = 4;

  static const bool areAllVolunteersApprovers = false;

  static bool isNotificationsCurrentlySupported() {
    if(kIsWeb) {
      return isNotificationsSupported && isWebNotificationsSupported;
    }
    return isNotificationsSupported;
  }

  static List<LanguageModel> availableLanguages() => [
    LanguageModel(const Locale("hu"), "Magyar"),
  ];

  static String getUserPrefix(String email){
    return "$organization+$email";
  }

  static List<String> compatibleUrls() => [
    AppConfig.webLink
  ];
}