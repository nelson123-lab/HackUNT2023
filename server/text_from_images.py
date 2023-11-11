import cv2
import pytesseract

# Load the image
image = cv2.imread('\Frontend designing\Translate Meaning.png')

# Convert the image to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Apply a threshold to the grayscale image
_, thresh = cv2.threshold(gray, 30, 255, cv2.THRESH_BINARY_INV)

# Find contours in the thresholded image
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Find the largest contour (assuming it's the black box)
largest_contour = max(contours, key=cv2.contourArea)

# Get the bounding rectangle of the largest contour
x, y, w, h = cv2.boundingRect(largest_contour)
# Set the tesseract executable path (if needed)
pytesseract.pytesseract.tesseract_cmd = 'path/to/tesseract'

# Crop the image to the bounding rectangle
cropped_image = gray[y:y+h, x:x+w]

# Extract the text from the cropped image
text = pytesseract.image_to_string(cropped_image)

print("Extracted text:", text)


# Currently on hold gona fix in future versions.