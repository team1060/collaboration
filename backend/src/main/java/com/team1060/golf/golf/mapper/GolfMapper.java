package com.team1060.golf.golf.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.team1060.golf.golf.entity.Golf;

@Mapper
public interface GolfMapper {
	
	// 골프장 전체 조회 
	@Select("select * from tbl_golf")
	List<Golf> getList();
	// 골프장 등록 
	@Insert("insert into tbl_golf(region, name, description, holes, pars, land_area, address, contact, fax) " +
			"values(#{region}, #{name}, #{description}, #{holes}, #{pars}, #{land_area}, #{address}, #{contact}, #{fax})")
	int insert(Golf golf);
	// 골프장 1개 조회 
	Golf select(Long golf_no);
	
	// 골프장 수정 
	int update(Golf golf);
	// 골프장 삭제 
	int delete(Long golf_no);
}
