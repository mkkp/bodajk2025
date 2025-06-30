from PIL import Image
import zipfile
import os

# --- Configuration ---
# The name of the map image file.
# Make sure this file is in the same directory as this script.
IMAGE_FILENAME = 'togyestabor_120x98_25 (1)_1.png'

# The directory where the cropped icon images will be saved.
OUTPUT_DIR = "assets/legend_icons"

# The name of the final zip file.
ZIP_FILENAME = "legend_icons.zip"

# --- Icon Coordinates ---
# This list defines the icons to be extracted.
# Each item is a tuple containing:
#   1. The name for the icon's output file (e.g., "Tabor_hatara").
#   2. A "box" tuple with four values: (left, upper, right, lower).
#      - 'left': The x-coordinate of the left edge of the icon.
#      - 'upper': The y-coordinate of the top edge of the icon.
#      - 'right': The x-coordinate of the right edge of the icon.
#      - 'lower': The y-coordinate of the bottom edge of the icon.
#
# If the cropping is not perfect, you may need to adjust these numbers.
# A good way to find coordinates is to open the map in an image editor
# (like GIMP, Photoshop, or MS Paint) which shows pixel coordinates.
icon_data = [

    # --- Legend Icons (Bottom-Left of Map) ---
    # Column 1
    ("Tabor_hatara",      (103, 1292, 159, 1348)),
    ("Fobejarat",         (103, 1346, 159, 1402)),
    ("Kemping",           (103, 1400, 159, 1456)),
    ("Gyereklegelo",      (103, 1454, 159, 1510)),
    ("Dezinformacio",     (103, 1508, 159, 1564)),
    ("Kutyibolt",         (103, 1563, 159, 1619)),
    ("Csarda_1",          (103, 1618, 159, 1674)),

    # --- Additional Icons (from the map area) ---
    ("Csarda_2",          (157, 1618, 1085, 1674)),
    ("Csarda_3",          (211, 1618, 1160, 1674)),

    ("Piasator",          (104, 1671, 160, 1727)),
    ("Nagysator",         (103, 1724, 159, 1780)),
    
    # Column 2
    ("Zuhanyzo",          (518, 1235, 574, 1291)),
    ("WC",                (518, 1289, 574, 1345)),
    ("Hintaagyak",        (518, 1342, 574, 1398)),
    ("Sportpalya",        (518, 1397, 574, 1453)),
    ("Muhely",            (518, 1451, 574, 1507)),
    ("Tuzrakohely",       (518, 1506, 574, 1562)),
    ("Ping_pong_sator",   (518, 1560, 574, 1616)),
    ("Workshop_sator",    (517, 1617, 573, 1673)),
    ("Gorog_szinhaz",     (518, 1672, 574, 1730)),
    ("Patakkapu",         (518, 1729, 574, 1785)),

    # Column 3
    ("Nyolcagyas_fahazak",(892, 1610, 885, 1650)),
    ("Negyagyas_fahazak", (892, 1665, 885, 1705)),

]


# --- Main Script Logic ---
def main():
    """
    Main function to run the icon extraction process.
    """
    # Load the source image
    try:
        image = Image.open(IMAGE_FILENAME)
    except FileNotFoundError:
        print(f"Error: The image file '{IMAGE_FILENAME}' was not found.")
        print("Please make sure the image is in the same directory as this script.")
        return

    # Create the output directory if it doesn't exist
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"Created directory: {OUTPUT_DIR}")

    # Crop and save each icon
    print("\nProcessing icons...")
    for name, box in icon_data:
        try:
            icon = image.crop(box)
            icon_path = os.path.join(OUTPUT_DIR, f"{name}.png")
            icon.save(icon_path)
            print(f"  - Saved: {icon_path}")
        except Exception as e:
            print(f"  - Error processing '{name}': {e}")
    
    # # Create a zip file of the icons
    # print(f"\nCreating zip file: {ZIP_FILENAME}")
    # try:
    #     with zipfile.ZipFile(ZIP_FILENAME, 'w') as zipf:
    #         for root, _, files in os.walk(OUTPUT_DIR):
    #             for file in files:
    #                 zipf.write(os.path.join(root, file), os.path.basename(file))
    #     print("Successfully created zip file.")
    # except Exception as e:
    #     print(f"Error creating zip file: {e}")


if __name__ == "__main__":
    main()
