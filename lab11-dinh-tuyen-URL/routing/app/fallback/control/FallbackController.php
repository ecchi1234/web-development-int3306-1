<?php
    namespace fallback\control;
    
    class FallbackController {
        public function proc($arr) {
			header('Content-type: application/json');
            echo '{"status":"ERR", "data":"ACTION-NOT-FOUND"}'; 
        }
    }
