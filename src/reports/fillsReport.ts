/* eslint-disable @typescript-eslint/no-explicit-any */
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { FillWithFuelPumpAndTank } from '../models/Fill';
import { formatDateToPT } from '../utils/formatDate';
import { formatMoney } from '../utils/formatMoney';

export const fillsReportPDF = async (fills: FillWithFuelPumpAndTank[]) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [
    {
      text: 'Relatório de abastecimentos',
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ] as any[];

  const data = fills.map((fill) => {
    return [
      {
        text: formatDateToPT(fill.fill_at || ''),
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: fill.pump.tank.type,
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: fill.pump.type,
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: formatMoney(fill.amount),
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
    ];
  });

  const totalSum = fills.reduce((acc, act) => (acc += act.amount), 0);

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*'],
        body: [
          [
            {
              text: 'Data',
              style: 'tableHeader',
              fontSize: 10,
            },
            {
              text: 'Tanque',
              style: 'tableHeader',
              fontSize: 10,
            },
            {
              text: 'Bomba de Combustível',
              style: 'tableHeader',
              fontSize: 10,
            },
            {
              text: 'Valor',
              style: 'tableHeader',
              fontSize: 10,
            },
          ],
          ...data,
          [
            {
              text: '',
              style: 'tableHeader',
              fontSize: 10,
            },
            {
              text: '',
              style: 'tableHeader',
              fontSize: 10,
            },
            {
              text: '',
              style: 'tableHeader',
              fontSize: 10,
            },
            {
              text: '',
              style: 'tableHeader',
              fontSize: 10,
            },
          ],
        ],
      },
      layout: 'lightHorizontalLines',
    },
    {
      text: `SOMA TOTAL: ${formatMoney(totalSum)}`,
      fontSize: 10,
      margin: [0, 10, 0, 10],
    },
  ] as any[];

  const footer = (currentPage: any, pageCount: any) => {
    return [
      {
        text: currentPage + '/' + pageCount,
        alignment: 'right',
        fontSize: 9,
        margin: [15, 20, 15, 45],
      },
    ];
  };

  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: footer,
  } as any;

  pdfMake.createPdf(docDefinitions).download();
};
