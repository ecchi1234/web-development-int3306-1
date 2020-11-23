<?php
    namespace qldt\control;
    require_once("app/qldt/model/Std.php");
    
    
    class StdController {
        public $masv;
        public $hoten;
        public $ngaysinh;
        public $gioitinh;
        public $quequan;
        public function proc($arr) {
            header('Access-Control-Allow-Origin: *');
			header('Content-type: application/json');
			$std = new \qldt\model\Std();
            $data = $std->getAll();
            echo '{"status":"OK", "data":'.json_encode($data).'}';
			// echo '{"status":"OK", "data":[1, 2, 3]}';
        }

		public function getByID($arr) {
            header('Access-Control-Allow-Origin: *');
            header('Content-type: application/json');
            $std = new \qldt\model\Std();
            $data = $std -> getUsingId($arr[0]);
            // echo '{"status":"OK", "data":[1, 2, 3]}';
			echo '{"status":"OK", "data":'.json_encode($data).'}';
        }

        public function updateOneStd($arr) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: *');
            header('Content-type: application/json');
            $std = new \qldt\model\Std();
            $data = json_encode(file_get_contents("php://input"));
            $std -> updateById($arr);
            // echo '{"status": "OK", "data": [1, 2, 3]}';
            
			echo '{"status":"OK", "data":'.file_get_contents("php://input").'}';
			//$input = json_decode(file_get_contents("php://input"), true);
        }  
    }