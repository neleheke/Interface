import tkinter as tk
from PIL import Image, ImageDraw, ImageTk

class App:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Input Window")

        # Eingabefeld
        self.label = tk.Label(self.root, text="Geben Sie etwas ein:")
        self.label.pack()
        self.entry = tk.Entry(self.root)
        self.entry.pack()

        # Button zum Bestätigen
        self.submit_button = tk.Button(self.root, text="Generiere Bild", command=self.open_output_window)
        self.submit_button.pack()

        self.output_window = None

    def open_output_window(self):
        input_text = self.entry.get()

        # Erstelle das Output-Fenster
        if self.output_window is None or not tk.Toplevel.winfo_exists(self.output_window):
            self.output_window = tk.Toplevel(self.root)
            self.output_window.title("Output Window")

            # Generiere das Bild basierend auf der Eingabe
            img = self.generate_image(input_text)

            # Zeige das Bild im Fenster
            img_tk = ImageTk.PhotoImage(img)
            label_img = tk.Label(self.output_window, image=img_tk)
            label_img.image = img_tk  # Referenz behalten!
            label_img.pack()

    def generate_image(self, text):
        # Beispiel: Erstelle ein Bild mit dem eingegebenen Text
        width, height = 800, 600
        img = Image.new('RGB', (width, height), color='white')
        draw = ImageDraw.Draw(img)

        # Text in die Mitte zeichnen
        draw.text((width//2 - 100, height//2), text, fill='black')

        return img

    def run(self):
        self.root.mainloop()

if __name__ == "__main__":
    app = App()
    app.run()