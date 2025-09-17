## Title

`The Legend of Encyron` — `Cryptography`

* **Author:** `Ehsan Khani` • **Date:** `9/17/2025`

---

## Difficulty / Time spent

`Difficulty: Easy` • `Time: 3 min`

---

## Tags

`Tags: crypto, morse code, decode `  

---

## TL;DR

Paste the Morse code into any reliable online decoder to reveal the flag instantly. No manual decoding needed.

---

## Problem

A string of Morse code was provided as the challenge input. The goal is to decode it and extract the hidden flag.  
No encryption beyond Morse—just dots, dashes, and spacing. 

---

## Tools

https://cryptii.com/pipes/morse-code-translator
https://morsecodetranslator.com/
or any morse code decoder

---

## Steps (reproducible)


1. Open the file titled `hello my little champ!` and copy its entire contents.
2. Paste the Morse code into a reliable online decoder (e.g., morsecode.world or dcode.fr).
3. Decode the message and extract the flag from the output.

---

## Flag

`UUT_CTF_2025{HEY_SUNSHINE_WELCOME!}`

---

## Screenshots

![Morse code file preview](../../../assets/morse_code.jpg)

---

## Repo layout (suggested)

```
/Cryptography/
  /The Legend of Encyron/
    /Question/
      hello my little champ! #main file containing the morse code
      question-en.docx  #english question
      question-fa.docx  #persian question
    /Answer/
      hello my little champ!.md #markdown file explaining the answer
```