package com.team1060.golf.golf.vo;

import java.time.ZonedDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/*
 * 골프 코스 
 */

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class GolfCourse {
	private Long course_no; // 코스 번호 
	private Long golf_no; // 골프장 번호 
	private String course_name; // 코스이름 
	private int greenpee; // 그린피 
	private ZonedDateTime golf_time; // 코스 시간 
	private ZonedDateTime golf_date; // 코스 날짜 
}
