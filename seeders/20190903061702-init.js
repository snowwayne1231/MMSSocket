'use strict';

var createdAt = new Date();
var updatedAt = new Date();
var attempt = (ary) => ary.map(e => { return {...e, createdAt, updatedAt}});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('hosts', attempt([
        {
          name: 'AG',
          code: 'ag',
        },
        {
          name: 'AN',
          code: 'an',
        },
        {
          name: 'YP',
          code: 'yp',
        },
        {
          name: 'GC',
          code: 'gc',
        },
        {
          name: 'DP',
          code: 'dp',
        },
      ]), {}),

      queryInterface.bulkInsert('areas', attempt([
        {
          name: '國外',
          code: 'o',
          sort_number: 5,
        },
        {
          name: '北區',
          code: 'n',
          sort_number: 1,
        },
        {
          name: '南區',
          code: 's',
          sort_number: 2,
        },
        {
          name: '西區',
          code: 'w',
          sort_number: 3,
        },
        {
          name: '中區',
          code: 'm',
          sort_number: 4,
        },
      ]), {}),

      queryInterface.bulkInsert('cities', attempt([
        {
          area_id: 3,
          name: '北京',
          code: 'bj',
        },
        {
          area_id: 3,
          name: '陝西',
          code: 'sx',
        },
        {
          area_id: 4,
          name: '廣東',
          code: 'gd',
        },
        {
          area_id: 6,
          name: '上海',
          code: 'sh',
        },
        {
          area_id: 1,
          name: '菲律賓',
          code: 'ph',
        },
      ]), {}),

      queryInterface.bulkInsert('suppliers', attempt([
        {
          name: 'RPS',
          code: 'rps',
        },{
          name: 'BGP',
          code: 'bgp',
        },{
          name: 'CM',
          code: 'cm',
        },{
          name: 'CU',
          code: 'cu',
        },{
          name: 'CT',
          code: 'ct',
        },
      ]), {}),

      queryInterface.bulkInsert('types', attempt([
        {
          name: '外圍',
        },{
          name: '中轉',
        },{
          name: '專線',
        },{
          name: '線路',
        },{
          name: '機器變更',
        },{
          name: '異常問題',
        },{
          name: '服務變更',
        },
      ]), {}),

      queryInterface.bulkInsert('machines', attempt([
        {
          host_id: 1,
          city_id: 1,
          supplier_id: 1,
          number: '01',
          type_id: 1,
          bandwidth: 50,
        },{
          host_id: 2,
          city_id: 1,
          supplier_id: 2,
          number: '01',
          type_id: 1,
          bandwidth: 50,
        },{
          host_id: 1,
          city_id: 2,
          supplier_id: 2,
          number: '01',
          type_id: 1,
          bandwidth: 50,
        },{
          host_id: 2,
          city_id: 2,
          supplier_id: 2,
          number: '01',
          type_id: 1,
          bandwidth: 50,
        },
      ]), {}),

      queryInterface.bulkInsert('monitors', attempt([
        {
          type_id: 2,
          key: 'city',
          key_id: 1,
          name: '',
        },{
          type_id: 2,
          key: 'city',
          key_id: 3,
          name: '',
        },{
          type_id: 2,
          key: 'city',
          key_id: 4,
          name: '',
        },{
          type_id: 2,
          key: '',
          key_id: 0,
          name: 'segA',
        },{
          type_id: 2,
          key: '',
          key_id: 0,
          name: 'segB',
        },{
          type_id: 2,
          key: '',
          key_id: 0,
          name: 'EQ',
        },{
          type_id: 2,
          key: 'city',
          key_id: 1,
          name: '',
        },{
          type_id: 3,
          key: 'city',
          key_id: 1,
          name: '',
        },{
          type_id: 3,
          key: 'city',
          key_id: 3,
          name: '',
        },{
          type_id: 4,
          key: 'supplier',
          key_id: 1,
          name: '',
        },{
          type_id: 4,
          key: 'supplier',
          key_id: 3,
          name: '',
        },{
          type_id: 4,
          key: 'supplier',
          key_id: 4,
          name: '',
        },{
          type_id: 4,
          key: 'supplier',
          key_id: 5,
          name: '',
        },{
          type_id: 1,
          key: 'machine',
          key_id: 1,
          name: '',
        },
      ]), {}),

      queryInterface.bulkInsert('hashtags', attempt([
        {
          name: '機器新增',
          type_id: 5,
        },{
          name: '機器異動',
          type_id: 5,
        },{
          name: '線路不穩',
          type_id: 6,
        },{
          name: '機器異常',
          type_id: 6,
        },{
          name: '外圍失聯',
          type_id: 6,
        },{
          name: '外圍掉包',
          type_id: 6,
        },{
          name: '外圍維護',
          type_id: 6,
        },{
          name: '專線斷線',
          type_id: 6,
        },{
          name: '專線掉包',
          type_id: 6,
        },{
          name: '服務升級',
          type_id: 7,
        },
      ]), {}),

      queryInterface.bulkInsert('operators', attempt([
        {
          name: 'Dada',
        },{
          name: 'Grey',
        },{
          name: 'White',
        },{
          name: 'Helen',
        },
      ]), {}),

      queryInterface.bulkInsert('causes', attempt([
        {
          type_id: 6,
          name: '機器問題',
        },{
          type_id: 6,
          name: '線路問題',
        },{
          type_id: 6,
          name: '其它',
        },
      ]), {}),

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('hosts', null, {}),
      queryInterface.bulkDelete('areas', null, {}),
      queryInterface.bulkDelete('cities', null, {}),
      queryInterface.bulkDelete('suppliers', null, {}),
      queryInterface.bulkDelete('types', null, {}),
      queryInterface.bulkDelete('machines', null, {}),
      queryInterface.bulkDelete('hashtags', null, {}),
      queryInterface.bulkDelete('operators', null, {}),
      queryInterface.bulkDelete('causes', null, {}),
    ]);
  }
};
