package com.team1060.golf.golf.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import com.team1060.golf.golf.api.response.ViewCourse;
import com.team1060.golf.golf.mapper.ReserveMapper;

import lombok.RequiredArgsConstructor;

/**
 * <pre>
 * 예약 서비스 
 * </pre>
 * @author KJY
 * @since 2023.12.23
 */

@Service
@RequiredArgsConstructor
public class ReserveService {
	private final ReserveMapper reserveMapper;
	
	// 골프장 이름 + 날짜 조회 
	public List<ViewCourse> getGolfNameList(Long golf_no, LocalDate golf_date){
		return reserveMapper.getGolfNameList(golf_no, golf_date);
	}
	// 코스 전체 조회 
	public List<ViewCourse> selectAllCourse() {
		return reserveMapper.getList();
	}
}
