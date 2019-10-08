'use strict';

var createdAt = new Date();
var updatedAt = new Date();
var attempt = (ary) => ary.map(e => { return { ...e, createdAt, updatedAt } });

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
        { area_id: 1, name: '澳門', code: 'mo', },
        { area_id: 1, name: '香港', code: 'hk', },
        { area_id: 1, name: '臺灣', code: 'tw', },
        { area_id: 1, name: '馬來西亞', code: 'my', },
        { area_id: 1, name: '菲律賓', code: 'ph', },
        { area_id: 1, name: '日本', code: 'jp', },
        { area_id: 1, name: '新加坡', code: 'sg', },
        { area_id: 1, name: '印尼', code: 'id', },
        { area_id: 2, name: '北京', code: 'bj', },
        { area_id: 2, name: '河北', code: 'he', },
        { area_id: 2, name: '吉林', code: 'jl', },
        { area_id: 2, name: '遼寧', code: 'ln', },
        { area_id: 2, name: '內蒙古', code: 'nm', },
        { area_id: 2, name: '山東', code: 'sd', },
        { area_id: 2, name: '山西', code: 'sx', },
        { area_id: 2, name: '天津', code: 'tj', },
        { area_id: 2, name: '黑龍江', code: 'hl', },
        { area_id: 3, name: '福建', code: 'fj', },
        { area_id: 3, name: '廣東', code: 'gd', },
        { area_id: 3, name: '廣西', code: 'gx', },
        { area_id: 3, name: '海南', code: 'hi', },
        { area_id: 3, name: '江西', code: 'jx', },
        { area_id: 3, name: '湖南', code: 'hn', },
        { area_id: 4, name: '甘肅', code: 'gs', },
        { area_id: 4, name: '貴州', code: 'gz', },
        { area_id: 4, name: '寧夏', code: 'nx', },
        { area_id: 4, name: '青海', code: 'qh', },
        { area_id: 4, name: '陝西', code: 'sn', },
        { area_id: 4, name: '四川', code: 'sc', },
        { area_id: 4, name: '西藏', code: 'xz', },
        { area_id: 4, name: '新疆', code: 'xj', },
        { area_id: 4, name: '雲南', code: 'yn', },
        { area_id: 4, name: '重慶', code: 'cq', },
        { area_id: 5, name: '安徽', code: 'ah', },
        { area_id: 5, name: '河南', code: 'ha', },
        { area_id: 5, name: '江蘇', code: 'js', },
        { area_id: 5, name: '上海', code: 'sh', },
        { area_id: 5, name: '浙江', code: 'zj', },
        { area_id: 5, name: '湖北', code: 'hb', },
      ]), {}), 
      
      queryInterface.bulkInsert('suppliers', attempt([
        { name: 'RPS', code: 'rps', },
        { name: 'CM', code: 'cm', },
        { name: 'CU', code: 'cu', },
        { name: 'CT', code: 'ct', },
        { name: 'BGP', code: 'bgp', },
        { name: 'UN', code: 'un', },
        { name: 'GT', code: 'gt', },
        { name: 'RJ', code: 'rj', },
        { name: 'ZT', code: 'zt', },
        { name: 'TA', code: 'ta', },
        { name: 'VCU', code: 'vcu', },
        { name: 'VCT', code: 'vct', },
        { name: 'VBGP', code: 'vbgp', },
        { name: 'VUN', code: 'vun', },
        { name: 'HCU', code: 'hcu', },
        { name: 'HCT', code: 'hct', },
        { name: 'HBGP', code: 'hbgp', },
        { name: 'HUN', code: 'hun', },
      ]), {}),
      queryInterface.bulkInsert('types', attempt([
        { name: '外圍', },
        { name: '中轉', },
        { name: '專線', },
        { name: '線路', },
        { name: '異常問題', },
        { name: '機器變更', },
        { name: '服務變更', },
      ]), {}),

      queryInterface.bulkInsert('machines', attempt([
        { host_id: 1, city_id: 9, supplier_id: 3, number: '01', type_id: 1, bandwidth: 50, },
        { host_id: 2, city_id: 9, supplier_id: 3, number: '01', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 15, supplier_id: 3, number: '02', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 15, supplier_id: 3, number: '02', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 15, supplier_id: 3, number: '03', type_id: 1, bandwidth: 50, },
        { host_id: 2, city_id: 15, supplier_id: 3, number: '03', type_id: 1, bandwidth: 50, },
        { host_id: 1, city_id: 12, supplier_id: 11, number: '04', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 12, supplier_id: 11, number: '04', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 9, supplier_id: 6, number: '05', type_id: 1, bandwidth: 50, },
        { host_id: 2, city_id: 9, supplier_id: 6, number: '05', type_id: 1, bandwidth: 50, },
        { host_id: 1, city_id: 14, supplier_id: 6, number: '06', type_id: 1, bandwidth: 50, },
        { host_id: 2, city_id: 14, supplier_id: 6, number: '06', type_id: 1, bandwidth: 50, },
        { host_id: 1, city_id: 9, supplier_id: 3, number: '07', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 9, supplier_id: 3, number: '07', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 11, supplier_id: 3, number: '08', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 11, supplier_id: 3, number: '08', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 12, supplier_id: 3, number: '09', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 12, supplier_id: 3, number: '09', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 9, supplier_id: 5, number: '10', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 9, supplier_id: 5, number: '10', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 10, supplier_id: 5, number: '11', type_id: 1, bandwidth: 20, },
        { host_id: 2, city_id: 10, supplier_id: 5, number: '11', type_id: 1, bandwidth: 20, },
        { host_id: 1, city_id: 9, supplier_id: 13, number: '13', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 9, supplier_id: 13, number: '13', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 15, supplier_id: 11, number: '14', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 15, supplier_id: 11, number: '14', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 10, supplier_id: 12, number: '15', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 10, supplier_id: 12, number: '15', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 14, supplier_id: 13, number: '16', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 14, supplier_id: 13, number: '16', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 10, supplier_id: 16, number: '20', type_id: 1, bandwidth: 30, },
        { host_id: 2, city_id: 10, supplier_id: 16, number: '20', type_id: 1, bandwidth: 30, },
        { host_id: 1, city_id: 9, supplier_id: 6, number: '12', type_id: 1, bandwidth: 10, },
      ]), {}),

      queryInterface.bulkInsert('monitors', attempt([
        { type_id: 3, key: 'city', key_id: 9, name: '', },
        { type_id: 3, key: 'city', key_id: 19, name: '', },
        { type_id: 3, key: 'city', key_id: 37, name: '', },
        { type_id: 3, key: 'city', key_id: 5, name: '', },
        { type_id: 3, key: '', key_id: 0, name: 'MK-II' },
        { type_id: 1, key: '', key_id: 0, name: 'GD gccdn2' },
        { type_id: 1, key: '', key_id: 0, name: 'R240' },
        { type_id: 1, key: '', key_id: 0, name: 'R251' },
        { type_id: 1, key: 'supplier', key_id: 1, name: '', },
        { type_id: 1, key: 'supplier', key_id: 2, name: '', },
        { type_id: 1, key: 'supplier', key_id: 3, name: '', },
        { type_id: 1, key: 'supplier', key_id: 4, name: '', },
        { type_id: 1, key: 'machine', key_id: 1, name: '', },
        { type_id: 1, key: 'machine', key_id: 2, name: '', },
        { type_id: 1, key: 'machine', key_id: 3, name: '', },
        { type_id: 1, key: 'machine', key_id: 4, name: '', },
        { type_id: 1, key: 'machine', key_id: 5, name: '', },
        { type_id: 1, key: 'machine', key_id: 6, name: '', },
        { type_id: 1, key: 'machine', key_id: 7, name: '', },
        { type_id: 1, key: 'machine', key_id: 8, name: '', },
        { type_id: 1, key: 'machine', key_id: 9, name: '', },
        { type_id: 1, key: 'machine', key_id: 10, name: '', },
        { type_id: 1, key: 'machine', key_id: 11, name: '', },
        { type_id: 1, key: 'machine', key_id: 12, name: '', },
        { type_id: 1, key: 'machine', key_id: 13, name: '', },
        { type_id: 1, key: 'machine', key_id: 14, name: '', },
        { type_id: 1, key: 'machine', key_id: 15, name: '', },
        { type_id: 1, key: 'machine', key_id: 16, name: '', },
        { type_id: 1, key: 'machine', key_id: 17, name: '', },
        { type_id: 1, key: 'machine', key_id: 18, name: '', },
        { type_id: 1, key: 'machine', key_id: 19, name: '', },
        { type_id: 1, key: 'machine', key_id: 20, name: '', },
        { type_id: 1, key: 'machine', key_id: 21, name: '', },
        { type_id: 1, key: 'machine', key_id: 22, name: '', },
        { type_id: 1, key: 'machine', key_id: 23, name: '', },
        { type_id: 1, key: 'machine', key_id: 24, name: '', },
        { type_id: 1, key: 'machine', key_id: 25, name: '', },
        { type_id: 1, key: 'machine', key_id: 26, name: '', },
        { type_id: 1, key: 'machine', key_id: 27, name: '', },
        { type_id: 1, key: 'machine', key_id: 28, name: '', },
        { type_id: 1, key: 'machine', key_id: 29, name: '', },
        { type_id: 1, key: 'machine', key_id: 30, name: '', },
        { type_id: 1, key: 'machine', key_id: 31, name: '', },
        { type_id: 1, key: 'machine', key_id: 32, name: '', },
        { type_id: 1, key: 'machine', key_id: 33, name: '', },
      ]), {}),

      queryInterface.bulkInsert('hashtags', attempt([
        {
          name: '線路不穩',
          type_id: 5,
        }, {
          name: '機器異常',
          type_id: 5,
        }, {
          name: '外圍失聯',
          type_id: 5,
        }, {
          name: '外圍掉包',
          type_id: 5,
        }, {
          name: '外圍維護',
          type_id: 5,
        }, {
          name: '專線斷線',
          type_id: 5,
        }, {
          name: '專線掉包',
          type_id: 5,
        }, {
          name: '機器新增',
          type_id: 6,
        }, {
          name: '機器異動',
          type_id: 6,
        }, {
          name: '服務升級',
          type_id: 7,
        },
      ]), {}),

      queryInterface.bulkInsert('operators', attempt([
        {
          name: 'Dada',
        }, {
          name: 'Grey',
        }, {
          name: 'White',
        }, {
          name: 'Helen',
        },
      ]), {}),

      queryInterface.bulkInsert('causes', attempt([
        {
          type_id: 5,
          name: '機器問題',
        }, {
          type_id: 5,
          name: '線路問題',
        }, {
          type_id: 5,
          name: '維護',
        }, {
          type_id: 5,
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
