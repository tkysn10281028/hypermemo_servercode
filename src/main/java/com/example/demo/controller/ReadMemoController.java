package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Memo;
import com.example.demo.service.MemoService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/v1")
public class ReadMemoController {

	@Autowired
	MemoService memoService;

	/**
	 * @return
	 */
	@GetMapping("/publiclist")
	public ResponseEntity<List<Memo>> makePublicList() {
		log.info("MakePublicList API Started.");

		HttpHeaders headers = new HttpHeaders();
		List<Memo> memoList = memoService.findTopTenMemosSortedByViewCount();

		return new ResponseEntity<List<Memo>>(memoList, headers, HttpStatus.OK);

	}

	/**
	 * @param auth
	 * @return
	 */
	@GetMapping("/userinfo")
	public ResponseEntity<List<Memo>> makeUserInfoList(Authentication auth) {
		log.info("makeUserInfoList API Started.");
		log.info("In makeUserInfoList API,login emailaddress is : " + auth.getName());
		HttpHeaders headers = new HttpHeaders();
		List<Memo> memoList = memoService
				.findMemosSortedByUpdateAndCreateDateTimeByCreateUserEmailAddress(auth.getName());
		return new ResponseEntity<List<Memo>>(memoList, headers, HttpStatus.OK);

	}

}
