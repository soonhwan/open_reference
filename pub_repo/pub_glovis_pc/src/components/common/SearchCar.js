/* eslint-disable no-alert */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { objIsEmpty } from '@src/utils/PricingUtils';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import SelectBox from '@lib/share/items/SelectBox';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import Input from '@lib/share/items/Input';
import { getManufacturer, getNumberOfYears, getModels, getFuels, getDetailModels, getDrivingDistance, getColors, getCarCondOptions } from '@src/actions/searchCarConditionAction';

const SearchCar = ({ type, onSearchCarNoClick, onSearchCarCondClick }) => {
  const dispatch = useDispatch();

  const mnfcOptions = useSelector((state) => state.searchCarCond.mnfcOptions);
  const noyOptions = useSelector((state) => state.searchCarCond.noyOptions);
  const mdlOptions = useSelector((state) => state.searchCarCond.mdlOptions);
  const fuelOptions = useSelector((state) => state.searchCarCond.fuelOptions);
  const dmdlOptions = useSelector((state) => state.searchCarCond.dmdlOptions);
  const drvDistOptions = useSelector((state) => state.searchCarCond.drvDistOptions);
  const clrOptions = useSelector((state) => state.searchCarCond.clrOptions);
  const carCondOptions = useSelector((state) => state.searchCarCond.carCondOptions);

  React.useEffect(() => {
    dispatch(getManufacturer());
    dispatch(getCarCondOptions());
  }, []);

  const [uiWidth] = useState(type === 'marketPrice' ? 220 : 146);
  const [uiHeight] = useState(type === 'marketPrice' ? 48 : 60);

  const [selDisabled2, setSelDisabled2] = useState(true);
  const [selDisabled3, setSelDisabled3] = useState(true);
  const [selDisabled4, setSelDisabled4] = useState(true);
  const [selDisabled5, setSelDisabled5] = useState(true);
  const [selDisabled6, setSelDisabled6] = useState(true);
  const [selDisabled7, setSelDisabled7] = useState(true);

  const [certify, setCertify] = useState(false);
  const [carNo, setCarNo] = useState('');
  const [carCond, setCarCond] = useState({
    mnfc: null,
    noy: null,
    mdl: null,
    fuel: null,
    dmdl: null,
    drvDist: null,
    clr: null,
    options: []
  });

  const handleCertify = useCallback((e) => {
    e.preventDefault();
    setCertify(true);
  }, []);

  const handleChangeSel1 = useCallback(
    (e) => {
      const newCarCond = Object.assign({ ...carCond }, { mnfc: e.value });
      setCarCond(newCarCond);
      setSelDisabled2(false);
      dispatch(getNumberOfYears(newCarCond));
    },
    [carCond, dispatch]
  );

  const handleChangeSel2 = useCallback(
    (e) => {
      const newCarCond = Object.assign({ ...carCond }, { noy: e.value });
      setCarCond(newCarCond);
      setSelDisabled3(false);
      dispatch(getModels(newCarCond));
    },
    [carCond, dispatch]
  );

  const handleChangeSel3 = useCallback(
    (e) => {
      const newCarCond = Object.assign({ ...carCond }, { mdl: e.value });
      setCarCond(newCarCond);
      setSelDisabled4(false);
      dispatch(getFuels(newCarCond));
    },
    [carCond, dispatch]
  );

  const handleChangeSel4 = useCallback(
    (e) => {
      const newCarCond = Object.assign({ ...carCond }, { fuel: e.value });
      setCarCond(newCarCond);
      setSelDisabled5(false);
      dispatch(getDetailModels(newCarCond));
    },
    [carCond, dispatch]
  );

  const handleChangeSel5 = useCallback(
    (e) => {
      const newCarCond = Object.assign({ ...carCond }, { dmdl: e.value });
      setCarCond(newCarCond);
      setSelDisabled6(false);
      dispatch(getDrivingDistance(newCarCond));
    },
    [carCond, dispatch]
  );

  const handleChangeSel6 = useCallback(
    (e) => {
      const newCarCond = Object.assign({ ...carCond }, { drvDist: e.value });
      setCarCond(newCarCond);
      setSelDisabled7(false);
      dispatch(getColors(newCarCond));
    },
    [carCond, dispatch]
  );

  const handleChangeSel7 = useCallback(
    (e) => {
      setCarCond(Object.assign(carCond, { clr: e.value }));
    },
    [carCond]
  );

  const handleCarOptionChange = useCallback(
    (e) => {
      setCarCond(Object.assign(carCond, { options: e }));
    },
    [carCond]
  );

  const handleCarNoChanged = useCallback((e) => {
    setCarNo(e.target.value);
  }, []);

  const handleSearchCarNo = useCallback(
    (e) => {
      e.preventDefault();
      if (objIsEmpty(carNo)) {
        alert('차량번호를 입력해주세요.');
        return;
      }
      if (onSearchCarNoClick) {
        onSearchCarNoClick(e, {
          carNo: carNo
        });
      }
    },
    [carNo, onSearchCarNoClick]
  );

  const handleSearchCarCond = useCallback(
    (e) => {
      e.preventDefault();
      if (
        objIsEmpty(carCond.mnfc) ||
        objIsEmpty(carCond.noy) ||
        objIsEmpty(carCond.mdl) ||
        objIsEmpty(carCond.fuel) ||
        objIsEmpty(carCond.dmdl) ||
        objIsEmpty(carCond.drvDist) ||
        objIsEmpty(carCond.clr)
      ) {
        alert('차량옵션을 선택해주세요.');
        return;
      }

      if (onSearchCarCondClick) {
        onSearchCarCondClick(e, carCond);
      }
    },
    [carCond, onSearchCarCondClick]
  );

  const SearchCarCondition = () => {
    return (
      <>
        <ul className="search-car-terms">
          <li>
            <SelectBox id="carTerms1" className="items-sbox" options={mnfcOptions} width={uiWidth} height={48} onChange={handleChangeSel1} />
          </li>
          <li>
            <SelectBox id="carTerms2" className="items-sbox" options={noyOptions} disabled={selDisabled2} width={uiWidth} height={48} onChange={handleChangeSel2} />
          </li>
          <li>
            <SelectBox id="carTerms3" className="items-sbox" options={mdlOptions} disabled={selDisabled3} width={uiWidth} height={48} onChange={handleChangeSel3} />
          </li>
          <li>
            <SelectBox id="carTerms4" className="items-sbox" options={fuelOptions} disabled={selDisabled4} width={uiWidth} height={48} onChange={handleChangeSel4} />
          </li>
          <li>
            <SelectBox id="carTerms5" className="items-sbox" options={dmdlOptions} disabled={selDisabled5} width={uiWidth} height={48} onChange={handleChangeSel5} />
          </li>
          <li>
            <SelectBox id="carTerms6" className="items-sbox" options={drvDistOptions} disabled={selDisabled6} width={uiWidth} height={48} onChange={handleChangeSel6} />
          </li>
          <li>
            <SelectBox id="carTerms7" className="items-sbox" options={clrOptions} disabled={selDisabled7} width={uiWidth} height={48} onChange={handleChangeSel7} />
          </li>
          <li className="full">
            <SelectBox id="carTerms8" className="items-sbox multi" options={carCondOptions} multi={true} width="100%" height={48} onChange={handleCarOptionChange} />
          </li>
        </ul>
        <Buttons align="right">
          <Button size="big" background="blue80" title="조회" width={uiWidth} onClick={handleSearchCarCond} />
        </Buttons>
      </>
    );
  };

  const SearchCarNumber = () => {
    return type === 'marketPrice' ? (
      <>
        {certify === false ? (
          <div className="search-car-certify">
            <p>
              본인 차량만 시세조회가 가능하며,
              <br />
              본인확인을 위한 인증절차가 필요합니다.
            </p>
            <Buttons align="center" marginTop={20}>
              <Button size="big" background="blue80" title="인증진행" width={210} onClick={handleCertify} />
            </Buttons>
          </div>
        ) : (
          CreateSearchCar()
        )}
      </>
    ) : (
      CreateSearchCar()
    );
  };

  const CreateSearchCar = () => {
    return (
      <div className="search-car-num">
        <div className="search-tp2">
          <span className="search-area">
            <label htmlFor="car-num" className="hide">
              차량번호
            </label>
            <Input placeHolder="본인 차량의 차량번호를 입력해주세요. (예: 12가1234)" id="car-num" width="100%" height={uiHeight} value={carNo} onChange={handleCarNoChanged} />
          </span>
          <Button size="big" background="blue80" title="조회" width={uiWidth} height={uiHeight} onClick={handleSearchCarNo} />
        </div>
        <p className="tx-exp-tp3">* 차량번호 결과가 실제 차량과 상이할 경우, 차량 검색을 이용해주세요.</p>
      </div>
    );
  };

  return (
    <>
      {type === 'marketPrice' && (
        <TabMenu type="type3">
          <TabCont tabTitle="차량 조건검색" id="SearchCarFilter1" index={0}>
            {SearchCarCondition(0)}
          </TabCont>
          <TabCont tabTitle="차량번호로 조회" id="SearchCarFilter2" index={1}>
            {SearchCarNumber(1)}
          </TabCont>
        </TabMenu>
      )}
      {type === 'pricingSystem' && (
        <TabMenu type="type3">
          <TabCont tabTitle="차량번호로 조회" id="SearchCarFilter2" index={0}>
            {SearchCarNumber(0)}
          </TabCont>
          <TabCont tabTitle="차량 조건검색" id="SearchCarFilter1" index={1}>
            {SearchCarCondition(1)}
          </TabCont>
        </TabMenu>
      )}
    </>
  );
};

SearchCar.propTypes = {
  type: PropTypes.string,
  onSearchCarNoClick: PropTypes.func,
  onSearchCarCondClick: PropTypes.func
};
export default SearchCar;
