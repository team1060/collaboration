package com.team1060.golf.golf.mapper;

import java.time.LocalDate;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.team1060.golf.golf.api.request.RegisterAndModifyCourse;
import com.team1060.golf.golf.api.response.ViewCourse;

/**
 * <pre>
 * 예약 
 * </pre>
 * @author KJY
 * @since 2023.12.23
 */

@Mapper
public interface ReserveMapper {
	
	// 골프장 이름 + 골프장 날짜 별 조회 
	List<ViewCourse> getGolfNameList(@Param("golf_no")Long golf_no, @Param("golf_date") LocalDate golf_date);
	
	// 코스 전체 조회 
	List<ViewCourse> getList();
}
