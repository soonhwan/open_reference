# pip install PyQt5
import sys
from PyQt5.QtWidgets import QMainWindow, QApplication

class HelloWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setGeometry(200,100,400,300)
        self.setWindowTitle('HelloWindow')
        self.show()

if __name__ == "__main__":
    app = QApplication(sys.argv) # 내장 클래스 객체(인스턴스) 생성
    ex = HelloWindow() # 사용자 정의 클래스 객체 생성
    sys.exit(app.exec())