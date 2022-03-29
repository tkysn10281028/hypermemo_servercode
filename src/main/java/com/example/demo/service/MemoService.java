package com.example.demo.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Memo;
import com.example.demo.repository.MemoRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MemoService {
	@Autowired
	MemoRepository memoRepository;

	@Autowired
	UserInfoService userInfoService;

	/**
	 * 公開画面用データ返却API
	 * 
	 * @return 昇順の閲覧数トップ10のメモを表示
	 */
	public List<Memo> findTopTenMemosSortedByViewCount() {
		return memoRepository.findAll().stream().filter((value) -> !(value.getDisableFlg()))
				.filter((value) -> value.getPublicFlg()).sorted(Comparator.comparing(Memo::getViewCount).reversed())
				.limit(10).collect(Collectors.toList());
	}

	/**
	 * 個人画面用データ返却API
	 * 
	 * @param createUser
	 * @return 作成日時と更新日時でソートされたメモを作成者名が一致している場合のみ表示
	 */
	public List<Memo> findMemosSortedByUpdateAndCreateDateTimeByCreateUserEmailAddress(String createUserEmailAddress) {
		return memoRepository.findBycreateUserEmailAddress(createUserEmailAddress).stream()
				.filter((value) -> !(value.getDisableFlg()))
				.sorted(Comparator.comparing(Memo::getUpdateDateTime).reversed())
				.sorted(Comparator.comparing(Memo::getCreateDateTime).reversed()).collect(Collectors.toList());
	}

	/**
	 * @param memoTitle
	 * @param memoContents
	 * @param publicFlg
	 * @param createUserEmailAddress
	 * @param createUser
	 * @return 個人画面用データを返却する
	 */
	public List<Memo> createMemo(String memoTitle, String memoContents, Boolean publicFlg,
			String createUserEmailAddress, String createUser) {
		Memo memo = new Memo();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		LocalDateTime ldt = LocalDateTime.now();

		memo.setMemoTitle(memoTitle);
		memo.setMemoContents(memoContents);
		memo.setPublicFlg(publicFlg);
		memo.setDisableFlg(false);
		memo.setCreateUserEmailAddress(createUser);
		memo.setCreateUserEmailAddress(createUserEmailAddress);
		memo.setCreateDateTime(ldt.format(formatter));
		memo.setUpdateDateTime(ldt.format(formatter));
		memo.setViewCount(0);

		Memo newmemo = memoRepository.save(memo);
		log.info("Created New Record by Memo Class : {}", newmemo.toString());

		return findMemosSortedByUpdateAndCreateDateTimeByCreateUserEmailAddress(createUserEmailAddress);

	}

}
