import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {createWorker} from 'tesseract.js';
import test from '../../assets/test.png';

import {Container} from './styles';

export default function Main() {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const {
      data: {text},
    } = await worker.recognize(test);
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...');
  useEffect(() => {
    doOCR();
  });

  return (
    <Container>
      <View>{ocr}</View>
    </Container>
  );
}
