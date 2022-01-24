CREATE TABLE tb_board (
    idx INT NOT NULL AUTO_INCREMENT COMMENT '번호 (PK)',
    id VARCHAR(100) NOT NULL COMMENT '멤버 아이디',
    position VARCHAR(3000) NOT NULL COMMENT '멤버 포지션',
    stat_score VARCHAR(100) NOT NULL COMMENT '멤버 개인별 스탯 점수',
    insert_time DATETIME NOT NULL DEFAULT NOW() COMMENT '등록일',
    update_time DATETIME NULL COMMENT '수정일',
    delete_time DATETIME NULL COMMENT '삭제일',
    PRIMARY KEY (id)
)  COMMENT 'Members'