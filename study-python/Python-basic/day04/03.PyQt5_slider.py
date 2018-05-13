import sys
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QMainWindow, QApplication, QSlider, QLabel

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        # 가로슬라이더 생성
        self.slider = QSlider(Qt.Horizontal, self)
        self.slider.setMaximum(1000)
        self.slider.setMinimum(0)

        # 슬라이더 위치와 크기
        self.slider.setGeometry(30,40,200,30)

        # 시그널 연결(이벤트 핸들러 연결)
        self.slider.valueChanged[int].connect(self.message)

        # 라벨생성
        self.label = QLabel('CURRNET:0', self)
        self.label.setGeometry(30,80,100,30)

        # 윈도우 위치
        self.setGeometry(300,300,280,170)
        self.setWindowTitle('slider Example')

        self.show()

    # 이벤트 핸들러
    def message(self,value):
        print('슬라이더 값 출력')
        self.label.setText('CURRENT:{}'.format(value))

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = MyWindow()
    sys.exit(app.exec())
