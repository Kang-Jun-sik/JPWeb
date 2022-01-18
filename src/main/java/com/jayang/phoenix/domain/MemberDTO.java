package com.jayang.phoenix.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberDTO {
	
	/**
	 * 멤버 아이디(PK)
	 */
	private String memberID;

	/**
	 * 멤버 이름
	 */
	private String name;

	/**
	 * 멤버 성별
	 */
	private String sex;

	/**
	 * 멤버 포지션
	 */
	private String position;

	/**
	 * 멤버 스탯
	 */
	private int stat;
}
