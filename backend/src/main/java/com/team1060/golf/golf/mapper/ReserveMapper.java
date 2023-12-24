package com.team1060.golf.golf.mapper;

import java.time.LocalDate;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.team1060.golf.golf.api.request.RegisterAndModifyReserve;
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
	
	// 코스 전체 조회 
	List<ViewCourse> getList();
	
	// 골프장 예약 
	int insert(RegisterAndModifyReserve golf);

	// status 수정 
	int modify(RegisterAndModifyReserve golf);
	
	// 골프장 예약 취소 
	
	
}
