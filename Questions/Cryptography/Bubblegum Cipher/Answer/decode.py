from bubblepy import BubbleBabble
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_dir, "..", "Question", "BubblegumCipher.bubbly")

bb = BubbleBabble()

with open(file_path, "r") as f:
    encoded_text = f.read().strip()

print(encoded_text)

flag_bytes = bb.decode(encoded_text)
flag = flag_bytes.decode('utf-8')

print(f"Flag: {flag}")