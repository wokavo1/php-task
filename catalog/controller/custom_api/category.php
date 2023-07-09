<?php
//http://wokavo.beget.tech/index.php?route=custom_api/category.get
namespace Opencart\Catalog\Controller\CustomApi;
class Category extends \Opencart\System\Engine\Model {
    public function get() {
		$this->load->model('catalog/category');

		$results = $this->model_catalog_category->getAllCategories();

		header('Content-Type: application/json; charset=utf-8');
		echo json_encode($results);
	}
}