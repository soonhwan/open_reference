import sys
from PyQt5.QtWidgets import QMainWindow, QPushButton, QMessageBox, QApplication

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        button = QPushButton('Btn',self)
        button.move(10,10)
        button.clicked.connect(self.message)
        self.show()

    def message(self):
        msg = QMessageBox(self)
        msg.setText('OK! clicked!')
        msg.show()

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = MyWindow()
    sys.exit(app.exec())
