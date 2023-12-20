package com.team1060.golf.golf.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.team1060.golf.golf.vo.Golf;


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
    @Select("select * from tbl_golf where golf_no = #{golf_no}")
    Golf select(Long golf_no);

    // 골프장 수정
    @Update("update tbl_golf set region=#{region}, name=#{name}, description=#{description}, holes=#{holes}, pars=#{pars}, " +
            "land_area=#{land_area}, address=#{address}, contact=#{contact}, fax=#{fax} where golf_no=#{golf_no}")
    int update(Golf golf);

    // 골프장 삭제
    @Delete("delete from tbl_golf where golf_no = #{golf_no}")
    int delete(Long golf_no);
}
