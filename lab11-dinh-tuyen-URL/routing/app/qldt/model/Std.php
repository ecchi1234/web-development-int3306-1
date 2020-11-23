<?php
    namespace qldt\model;
    require_once("app/core/model/PDOData.php");
          
    class Std {
        private $db;
        public function __construct() { $this->db = new \core\model\PDOData();}
        public function __destruct() { $this->db = null;}
        public function getAll() {
            $sql = "select * from sinhvien;";
            return $this->db->doQuery($sql);
        }

        public function getUsingId($id) {
            $sql = "select * from sinhvien where masv=".$id;
            return $this->db->doQuery($sql);
        }

        public function updateById($id) {
            $sql = "update sinhvien set";
        }
    }         