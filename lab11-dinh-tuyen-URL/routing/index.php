<?php
	namespace core\control;
    require_once("app/core/control/Router.php");

    //Bộ điều khiển mặt trước
    class FrontController {
        public static function proc() {          
            //Định tuyến
            $ret = Router::proc();
            $filename = "app/".$ret["moduleName"]."/control/".ucfirst($ret["controllerName"])."Controller.php"; 
            require_once($filename);
            //Khai báo đối tượng lớp điều khiển
            $controllerName = "\\".$ret["moduleName"]."\\control\\".ucfirst($ret["controllerName"])."Controller"; 
            $controller = new $controllerName();
			//Kiểm tra phương thức có tồn tại hay không và thực thi 
			if (method_exists($controller, $ret['actionName'])) {
                        $action = $ret['actionName'];
                        $controller->$action($ret['parameters']);
            } else { 
                header('Access-Control-Allow-Origin: *');
                header('Content-type: application/json');
            	echo '{"status":"ERR", "data":"ACTION-NOT-FOUND"}';
			}
        }
    }
	
    FrontController::proc();