# Python 3 code to rename multiple
# files in a directory or folder
 
# importing os module
import os
import sys
 
# Function to rename multiple files
def main():

    # Check for correct command line 
    if (len(sys.argv) != 2):
        print("Error! Usage: python ./script.py FILEPATH")
        sys.exit()

   
    folder = f"{sys.argv[1]}"
    for count, filename in enumerate(os.listdir(folder)):
        dst = f"image-{str(count)}.jpg"
        src =f"{folder}/{filename}"  # foldername/filename, if .py file is outside folder
        dst =f"{folder}/{dst}"
        print(f"Converted {count} pictures")
         
        # rename() function will
        # rename all the files
        os.rename(src, dst)
 
# Driver Code
if __name__ == '__main__':
     
    # Calling main() function
    main()