const INPUT_ALERT_LIST = {
  titleBlank: '제목에 빈칸을 입력할 수 없습니다.',
};

const inputException = (title) => {
  if (title.value === '') {
    alert(INPUT_ALERT_LIST.titleBlank);
  } else {
    this.list = [];
    
  }
};

export { inputException };
