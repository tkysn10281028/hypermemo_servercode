package com.example.demo.controller;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Memo;
import com.example.demo.model.UserInfo;
import com.example.demo.service.MemoService;
import com.example.demo.service.UserInfoService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/v1")
public class CreateMemoController {

	@Autowired
	MemoService memoService;

	@Autowired
	UserInfoService userInfoService;

	@PostMapping("/creatememo")
	public ResponseEntity<List<Memo>> createMemo(@RequestParam(name = "memoTitle", required = true) String memoTitle,
			@RequestParam(name = "memoContents", required = true) String memoContents,
			@RequestParam(name = "publicFlg", required = true) Boolean publicFlg, Authentication auth) {

		log.info("creatememo API Started.");
		HttpHeaders headers = new HttpHeaders();

		if (StringUtils.isEmpty(auth.getName())) {
			return new ResponseEntity<List<Memo>>(null, headers, HttpStatus.BAD_GATEWAY);
		}
		UserInfo userInfo = userInfoService.findByEmailaddress(auth.getName());
		if (userInfo == null) {
			return new ResponseEntity<List<Memo>>(null, headers, HttpStatus.BAD_GATEWAY);
		}

		List<Memo> memolist = memoService.createMemo(memoTitle, memoContents, publicFlg, auth.getName(),
				userInfo.getUserName());
		return new ResponseEntity<List<Memo>>(memolist, headers, HttpStatus.OK);
	}
}
