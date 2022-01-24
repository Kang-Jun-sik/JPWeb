package com.jayang.phoenix;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.jayang.phoenix.domain.MemberDTO;
import com.jayang.phoenix.mapper.MemberMapper;

/**
 * Refer URI : https://congsong.tistory.com/16?category=749196 
 * @author kang
 *
 */
@SpringBootTest
class MapperTest {
	
	@Autowired
	private MemberMapper memberMapper;

	@Test
	public void testOfInsert() {
		MemberDTO params = new MemberDTO();
		params.setMemberID("kcu14362");
		params.setName("강준식");
		params.setPosition("G");
		params.setSex("M");
		params.setStat(88);
		
		int result = memberMapper.insertMember(params);
		System.out.println("결과는 " + result + "입니다.");
	}

}
