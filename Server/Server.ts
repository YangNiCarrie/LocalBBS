import * as express from 'express';
import * as cors from 'cors';

const app: express.Express = express();
const corsWhiteList: string[] = [ 'http://localhost:8080' ];

const corsConfigs: cors.CorsOptions = {
	origin: corsWhiteList
};

app.use(express.static('public'));

app.get('/test', cors(corsConfigs), (req, res) => {
	res.send({ data: 'This is a test string.' });
});

app.listen(3000, () => {
	console.log('Listening to port 3000');
});
