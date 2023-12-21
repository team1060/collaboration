package com.team1060.golf.golf.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team1060.golf.golf.api.request.RegisterAndModifyCourse;
import com.team1060.golf.golf.api.response.ViewCourse;

/**
 * <pre>
 * 코스 CRUD
 * </pre>
 * @author KJY
 * @since 2023.12.20
 */

@Mapper
public interface CourseMapper {
	
	// 코스등록
	int insert(RegisterAndModifyCourse course);
	// 코스 전체 조회 
	List<ViewCourse> getList();
	// 코스1개조회
	ViewCourse select(Long course_no);
	// 골프장별 코스 조회 
	List<ViewCourse> getGolfList(Long golf_no);
	// 코스 수정 
	int update(RegisterAndModifyCourse course);
	// 코스 삭제 
	int delete(Long course_no);
}
