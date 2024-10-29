// @deno-types=npm:@types/k6/http
import http from 'k6/http'

export default function () {
	http.get('http://localhost:8000/')
}
