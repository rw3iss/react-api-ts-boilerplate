'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
	// Base users
	db.createTable('pair_series_quotes', {
	    id: { type: 'int', primaryKey: true, autoIncrement: true },
			pair: 'string',
			bid: 'smallint',
			ask: 'smallint',
			price: 'smallint',
			timestamp: 'datetime'
	}, () => {
		db.addIndex('pair_series_quotes', 'psr_pair_index', ['pair'], true);
	});
	
	return null;
};

exports.down = function(db) {
	//db.dropTable('docker_domains');
	//db.dropTable('groups_docker_domains');
	db.dropTable('pair_series_quotes');
	return null;
};

exports._meta = {
  "version": 1
};


/* 
Data looks like:
{ symbol: 'EURUSD',
  bid: 1.12584,
  ask: 1.12585,
  price: 1.12584,
  timestamp: 1552374720 }
*/