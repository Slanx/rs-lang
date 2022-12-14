/* eslint-disable @typescript-eslint/indent */
import PageTitle from 'components/PageTitle';
import Spinner from 'components/Spinner';
import React, { useEffect, useState, createRef, useContext } from 'react';
import API from 'API/API';
import { IAuth, IFilteredWord, IWord } from 'interfaces/apiData';
import useLocalStorage from 'hooks/useLocalStorage';
import { BASE_URL } from '../constants/constants';
import { Context } from '../context/context';
import playImg from '../assets/png/play-button.png';
import pauseImg from '../assets/png/pause-button.png';
import thunderImg from '../assets/png/thunder.png';
import thunderGreyImg from '../assets/png/thunder_grey.png';
import checkImg from '../assets/png/check.png';
import checkGreyImg from '../assets/png/check_grey.png';

interface IWordBook {
  group: number;
  page: number;
  translate: boolean;
}

interface IWordProps {
  word: IWord | IFilteredWord;
  translate: boolean;
  isAuth: boolean;
}

interface IWordsListProps {
  group: number;
  page: number;
  translate: boolean;
  user: IAuth | null;
}

interface IControlBarProps {
  changeGroup: React.Dispatch<React.SetStateAction<number>>;
  changePage: React.Dispatch<React.SetStateAction<number>>;
  changeTranslate: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  selectedGroup: number;
  translate: boolean;
  user: IAuth | null;
}

interface IGroupSelectorProps {
  changeGroup: React.Dispatch<React.SetStateAction<number>>;
  selectedGroup: number;
  isAuth: boolean;
}

interface IPaginationProps {
  changePage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

interface IOptionsProps {
  changeTranslate: React.Dispatch<React.SetStateAction<boolean>>;
  showTranslate: boolean;
}

interface IWordBlockProps {
  audio: string;
  example: string;
  translate: string;
  isTranslate: boolean;
}

const WordBlock = ({ audio, example, translate, isTranslate }: IWordBlockProps) => {
  const visibilityClass = isTranslate ? ' hidden' : '';
  const subTextStyle = `text-[15px] text-slate-600 italic ${visibilityClass}`;
  const audioEl = createRef<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClick = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    if (!isPlaying) {
      (audioEl.current as HTMLAudioElement).pause();
    } else {
      (audioEl.current as HTMLAudioElement).play().catch((e: string) => {
        throw new Error(e);
      });
    }
  }, [isPlaying, audioEl]);

  return (
    <div className='w-[100%] md:w-[48%]'>
      <audio ref={audioEl} onEnded={handleClick}>
        <source src={`${BASE_URL}${audio}`} />
        <track kind='captions' />
      </audio>
      <button type='button' onClick={handleClick}>
        <img src={isPlaying ? pauseImg : playImg} alt='player controls' className='h-6' />
      </button>
      <p
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: example,
        }}
      />
      <p className={`${subTextStyle} mb-2`}>{translate}</p>
    </div>
  );
};

const GroupSelector = ({ changeGroup, selectedGroup, isAuth }: IGroupSelectorProps) => {
  const selectRef = createRef<HTMLSelectElement>();
  const handleChange = () => {
    changeGroup(+(selectRef.current as HTMLSelectElement).value);
  };

  const optionStyles = 'pl-2 pr-2';

  return (
    <div className='pl-2 pr-2 border border-blue-400 rounded'>
      <select id='group' onChange={handleChange} ref={selectRef} value={String(selectedGroup)}>
        <option className={optionStyles} value='0'>
          ???????????? 1
        </option>
        <option className={optionStyles} value='1'>
          ???????????? 2
        </option>
        <option className={optionStyles} value='2'>
          ???????????? 3
        </option>
        <option className={optionStyles} value='3'>
          ???????????? 4
        </option>
        <option className={optionStyles} value='4'>
          ???????????? 5
        </option>
        <option className={optionStyles} value='5'>
          ???????????? 6
        </option>
        {isAuth && (
          <option className={optionStyles} value='difficult'>
            ?????????????? ??????????
          </option>
        )}
      </select>
    </div>
  );
};

const Pagination = ({ changePage, page }: IPaginationProps) => {
  const [pageNum, setPageNum] = useState(page);
  const selectRef = createRef<HTMLSelectElement>();
  const decreasePage = () => {
    if (pageNum > 0) {
      setPageNum(pageNum - 1);
      changePage(pageNum - 1);
    }
  };
  const increasePage = () => {
    if (page < 29) {
      setPageNum(pageNum + 1);
      changePage(pageNum + 1);
    }
  };
  const handleChange = () => {
    setPageNum(+(selectRef.current as HTMLSelectElement).value);
    changePage(+(selectRef.current as HTMLSelectElement).value);
  };

  const createPageList = () => {
    const pages = [];
    for (let i = 0; i < 30; i += 1) {
      pages.push(
        <option value={i} key={i}>
          {i + 1}
        </option>,
      );
    }
    return pages;
  };

  const btnBasic = 'pl-2 pr-2 rounded';
  const btnActive = 'bg-blue-400 hover:bg-blue-300 transition';
  const btnDisabled = 'bg-slate-400';

  return (
    <div className='pl-2 pr-2'>
      <button
        type='button'
        disabled={pageNum === 0}
        onClick={decreasePage}
        className={`${btnBasic} ${pageNum === 0 ? btnDisabled : btnActive}`}
      >
        &lt;
      </button>
      <select value={page} ref={selectRef} onChange={handleChange}>
        {createPageList()}
      </select>
      <button
        type='button'
        disabled={pageNum === 29}
        onClick={increasePage}
        className={`${btnBasic} ${pageNum === 29 ? btnDisabled : btnActive}`}
      >
        &gt;
      </button>
    </div>
  );
};

const Options = ({ changeTranslate, showTranslate }: IOptionsProps) => {
  const handleChange = () => changeTranslate(!showTranslate);

  return (
    <div>
      <label htmlFor='options'>
        <input
          type='checkbox'
          id='options'
          className='mr-2'
          onChange={handleChange}
          checked={showTranslate}
        />
        ???????????? ??????????????
      </label>
    </div>
  );
};

const ControlBar = ({
  changeGroup,
  changePage,
  changeTranslate,
  page,
  selectedGroup,
  translate,
  user,
}: IControlBarProps) => {
  const isAuth = !!user;
  return (
    <div className='flex mb-4 mt-4 text-xl text-center flex-col min-h-[100px] justify-between md:flex-row md:min-h-[28px]'>
      <GroupSelector changeGroup={changeGroup} selectedGroup={selectedGroup} isAuth={isAuth} />
      <Pagination changePage={changePage} page={page} />
      <Options changeTranslate={changeTranslate} showTranslate={translate} />
    </div>
  );
};

const Word = ({ word, translate, isAuth }: IWordProps) => {
  const groupColors = [
    'bg-[#b1d9a3]',
    'bg-[#cbe8be]',
    'bg-[#e4f2d5]',
    'bg-[#fcf6e1]',
    'bg-[#ffcccb]',
    'bg-[#fcbaba]',
  ];
  const [isDifficult, setIsDifficult] = useState(false);
  const [isLearnt, setIsLearnt] = useState(false);

  const thunderSrc = isDifficult ? thunderImg : thunderGreyImg;
  const difficultTitle = isDifficult ? '???????????? ???? ?????????????? ????????' : '???????????????? ?? ?????????????? ??????????';
  const handleDifficultClick = () => {
    if (isLearnt) setIsLearnt(false);
    setIsDifficult(!isDifficult);
  };

  const checkSrc = isLearnt ? checkImg : checkGreyImg;
  const learntTitle = isLearnt ? '???????????? ???? ?????????????????? ????????' : '???????????????? ?? ?????????????????? ??????????';
  const handleLearntClick = () => {
    if (isDifficult) setIsDifficult(false);
    setIsLearnt(!isLearnt);
  };

  const optionImgClass = 'h-14 cursor-pointer';

  return (
    <div
      className={`p-3 mb-4 text-lg rounded shadow-lg shadow-slate-300 ${groupColors[word.group]}`}
    >
      <div className='flex flex-row mb-2 justify-between'>
        {isAuth && (
          <button className='self-start' type='button' onClick={handleDifficultClick}>
            <img
              className={optionImgClass}
              src={thunderSrc}
              alt='difficult'
              title={difficultTitle}
            />
          </button>
        )}
        <img
          src={`${BASE_URL}${word.image}`}
          alt={`${word.word}`}
          className='mx-auto rounded shadow-md shadow-black'
        />
        {isAuth && (
          <button className='self-start' type='button' onClick={handleLearntClick}>
            <img className={optionImgClass} src={checkSrc} alt='difficult' title={learntTitle} />
          </button>
        )}
      </div>
      <p className='mb-2 font-bold text-center'>
        {`${word.word} - ${word.transcription} - ${word.wordTranslate}`}
      </p>
      <div className='flex flex-col justify-between md:flex-row'>
        <WordBlock
          audio={word.audioMeaning}
          example={word.textMeaning}
          translate={word.textMeaningTranslate}
          isTranslate={translate}
        />
        <WordBlock
          audio={word.audioExample}
          example={word.textExample}
          translate={word.textExampleTranslate}
          isTranslate={translate}
        />
      </div>
    </div>
  );
};

const WordsList = ({ group, page, translate, user }: IWordsListProps) => {
  const isAuth = !!user;
  const [words, setWords] = useState<IWord[] | IFilteredWord[]>([]);

  useEffect(() => {
    if (!isAuth) {
      API.getWords(group, page)
        .then((wordsArray) => setWords(wordsArray))
        .catch((e: string) => {
          throw new Error(e);
        });
    } else {
      const filter = JSON.stringify({
        $and: [
          {
            group,
            page,
          },
        ],
      });
      API.getFilteredWords(user.userId, '20', filter)
        .then((wordsArray) => setWords(wordsArray))
        .catch((e: string) => {
          throw new Error(e);
        });
    }
  }, [group, page, isAuth, user]);

  return (
    <div className='pl-2 pr-2'>
      {words.length === 20 ? (
        words.map((word) => (
          <Word word={word} key={word.word} translate={translate} isAuth={isAuth} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const Wordbook = () => {
  const [wordBook, setWordBook] = useLocalStorage<IWordBook>('wordBook', {
    group: 0,
    page: 0,
    translate: false,
  });

  const [groupNum, setGroupNum] = useState(wordBook.group);
  const [pageNum, setPageNum] = useState(wordBook.page);
  const [showTranslate, setShowTranslate] = useState(wordBook.translate);

  useEffect(() => {
    wordBook.group = groupNum;
    wordBook.page = pageNum;
    wordBook.translate = showTranslate;
    setWordBook(wordBook);
  }, [wordBook, setWordBook, groupNum, pageNum, showTranslate]);

  const context = useContext(Context);
  const { user } = context.state;

  return (
    <div className='py-2 px-2 w-full'>
      <PageTitle>Wordbook</PageTitle>
      <ControlBar
        changeGroup={setGroupNum}
        changePage={setPageNum}
        changeTranslate={setShowTranslate}
        selectedGroup={groupNum}
        page={pageNum}
        translate={showTranslate}
        user={user}
      />
      <WordsList group={groupNum} page={pageNum} translate={showTranslate} user={user} />
    </div>
  );
};

export default Wordbook;
