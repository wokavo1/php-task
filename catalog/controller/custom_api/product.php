<?php
//http://wokavo.beget.tech/index.php?route=custom_api/product.getByCategoryID
namespace Opencart\Catalog\Controller\CustomApi;
class Product extends \Opencart\System\Engine\Model {
    public function getByCategoryID() {
		$this->load->model('catalog/product');
        $category_id = 0;
        if (isset($this->request->get['category_id'])) {
            $category_id = $this->request->get['category_id'];
        }

        $params = ['filter_category_id' => $category_id];
		$results = $this->model_catalog_product->getProducts($params);

		header('Content-Type: application/json; charset=utf-8');
        echo json_encode($results);
	}
}