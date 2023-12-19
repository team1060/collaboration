package com.team1060.golf.golf.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/*
 * 골프장 이미지 
 */

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class GolfImage {
	private String uuid; 
	private String category; // 이미지 카테고리 
	private Long course_no; // 코스 번호 
	private String path; // 이미지 경로 
	
}