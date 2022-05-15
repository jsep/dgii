import * as fs from 'fs';
import path from 'path';
import {PROJECT_ROOT} from '../config';

export interface Contribuyente {
  rnc: string;
  nombre: string;
  nombreComercial: string;
  razonSocial: string;
  extra: string;
}

export class Contribuyentes {
  private dataLoaded = false;
  private data: Contribuyente[] = [];

  async search(query: string): Promise<Contribuyente[]> {
    await this.loadData();
    return this.data
      .filter(({rnc, nombre, nombreComercial}) => {
        const r = new RegExp(query, 'i');

        return r.test(rnc) || r.test(nombre) || r.test(nombreComercial);
      })
      .slice(0, 100);
  }

  private async loadData() {
    if (this.dataLoaded) {
      return;
    }
    this.data = await this.parseData();
    this.dataLoaded = true;
  }

  private async parseData() {
    let filePath = this.getFilePath();
    const file = await this.loadFile(filePath);
    // console.log('file', typeof file);
    return JSON.parse(file);
    return file.split('\n').map((line) => {
      return this.parseLine(line);
    });
  }

  private getFilePath() {
    // return path.join(PROJECT_ROOT, 'contribuyentes', 'DGII_CONTRIBUYENTES.TXT');
    return path.join(PROJECT_ROOT, 'json', 'data.json');
  }

  async loadFile(file: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          return reject(err);
        }
        this.dataLoaded = true;
        resolve(data);
      });
    });
  }

  parseLine(line: string): Contribuyente {
    const [rnc, razonSocial, nombreComercial, ...rest] = line.split('|');
    return {
      rnc,
      nombre: razonSocial,
      razonSocial,
      nombreComercial,
      extra: rest.join('|'),
    };
  }
}

export const contribuyentes = new Contribuyentes();
