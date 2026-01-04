import fs from 'fs';
import csv from 'csv-parser';
import axios from 'axios';
import { API_URL } from '../config/app-config';

const results = [];

async function send(data) {
  console.log(`Iniciando a importação de ${data.length} itens...`);

  for (const item of data) {
    try {
      const response = await axios.post(
        `${API_URL}/episodes`,
        {
          data: {
            title: item.title,
            episode_number: parseInt(item.episode_number),
            description: item.description,
            // thumbnail: item.thumbnail,
            video_url: item.video_url,
          },
        },
        {
          headers: {
            Authorization: `Bearer 6b14fe20a63aa0a42459fb9bd2575302393f28dd81c15f670ca6f679fcea0b051f18c1f19d2cf99ba8456e23cd868e3d3603c381d6a63d9ea7ee7caff0cdb277d6a66936e0b7a9626e914cbd746c98425062de7a1dba0a8f0caa3c15c3f8c49eb24609b7e89d680384bba556de1a8caa0bd1632aa1e7105c6416f4944cdcbe78`,
          },
        },
      );

      console.log(`✅ Sucesso: ${item.title}`);
    } catch (e) {
      console.log(
        `Erro ao enviar "${item.title}":`,
        e.response?.data || e.message,
      );
    }
    console.log('Acabou.');
  }
}

fs.createReadStream('./src/scripts/data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    send(results);
  });
