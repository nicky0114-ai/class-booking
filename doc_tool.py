import os
import sys

# 1. MarkItDown: Convert Word, Excel, PPT, PDF to Markdown
def convert_to_markdown(file_path, output_path=None):
    try:
        from markitdown import MarkItDown
        md = MarkItDown()
        result = md.convert(file_path)
        
        if output_path:
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(result.text_content)
            print(f"成功轉換 {file_path} 到 {output_path}")
        else:
            print(result.text_content)
        return result.text_content
    except ImportError:
        print("錯誤：尚未安裝 markitdown 套件。請執行 'pip install markitdown'")
    except Exception as e:
        print(f"轉換失敗: {e}")

# 2. PyMuPDF: Extract text, pages, and metadata from PDF
def extract_pdf_text(file_path, output_path=None):
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(file_path)
        text_content = []
        
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text_content.append(f"--- Page {page_num + 1} ---")
            text_content.append(page.get_text())
            
        full_text = "\n".join(text_content)
        
        if output_path:
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(full_text)
            print(f"成功擷取 PDF 到 {output_path}")
        else:
            print(full_text)
        return full_text
    except ImportError:
        print("錯誤：尚未安裝 pymupdf 套件。請執行 'pip install pymupdf'")
    except Exception as e:
        print(f"擷取失敗: {e}")

# 3. PDF OCR: Optical Character Recognition for scanned images/PDFs
def ocr_image_or_pdf(file_path, output_path=None, lang='chi_tra+eng'):
    try:
        import pytesseract
        from PIL import Image
        import fitz  # PyMuPDF
        
        # Check if tesseract binary is available
        import shutil
        if not shutil.which("tesseract"):
            raise FileNotFoundError(
                "系統未安裝 tesseract 執行檔。如果您使用的是 Mac，請先在終端機安裝 Homebrew 並執行 'brew install tesseract tesseract-lang'。"
            )
            
        text_content = []
        ext = os.path.splitext(file_path)[1].lower()
        
        if ext in ['.pdf']:
            doc = fitz.open(file_path)
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                pix = page.get_pixmap()
                img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                text = pytesseract.image_to_string(img, lang=lang)
                text_content.append(f"--- Page {page_num + 1} (OCR) ---")
                text_content.append(text)
        else:
            # Assume it's an image file
            img = Image.open(file_path)
            text = pytesseract.image_to_string(img, lang=lang)
            text_content.append(text)
            
        full_text = "\n".join(text_content)
        
        if output_path:
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(full_text)
            print(f"成功 OCR 辨識到 {output_path}")
        else:
            print(full_text)
        return full_text
        
    except ImportError:
        print("錯誤：尚未安裝 pytesseract 套件。請執行 'pip install pytesseract pillow'")
    except FileNotFoundError as e:
        print(f"環境缺失錯誤：{e}")
    except Exception as e:
        print(f"OCR 辨識失敗: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("使用方法: python doc_tool.py [md|pdf|ocr] [檔案路徑] (輸出路徑)")
        sys.exit(1)
        
    cmd = sys.argv[1]
    input_file = sys.argv[2]
    out_file = sys.argv[3] if len(sys.argv) > 3 else None
    
    if cmd == "md":
        convert_to_markdown(input_file, out_file)
    elif cmd == "pdf":
        extract_pdf_text(input_file, out_file)
    elif cmd == "ocr":
        ocr_image_or_pdf(input_file, out_file)
    else:
        print("未知指令。請使用 'md', 'pdf' 或 'ocr'")
