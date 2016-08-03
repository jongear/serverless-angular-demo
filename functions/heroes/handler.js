'use strict';

var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

module.exports.handler = function(event, context, cb) {

  console.log('Received event:',JSON.stringify(event,null,2));
  console.log('Context:',JSON.stringify(context,null,2));
  console.log('operation', event.operation);

  var operation = event.operation;
  if(event.tableName) {
    event.payload.TableName = event.tableName;
    console.log('table name', event.tableName);
  }

  switch(operation){
    case 'create':
      dynamo.putItem(event.payload,context.succeed());
    case 'read':
      dynamo.getItem(event.payload,context.done);
      break;
    case 'list':
      dynamo.scan(event.payload, context.done);
      break;
  }
};