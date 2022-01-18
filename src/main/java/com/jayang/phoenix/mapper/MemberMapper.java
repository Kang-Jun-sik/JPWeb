package com.jayang.phoenix.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.jayang.phoenix.domain.MemberDTO;

@Mapper
public interface MemberMapper {

	public int insertMember(MemberDTO params);
	
	public MemberDTO selectMemberDetail(String memberId);
	
	public int updateMember(MemberDTO params);
	
	public int deleteMember(MemberDTO params);
	
	public List<MemberDTO> selectMemberList();
	
	public int selectMemberTotalCount();
	
}
