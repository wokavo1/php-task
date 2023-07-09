<?php
//http://wokavo.beget.tech/index.php?route=custom_api/order.getByCustomerID
namespace Opencart\Catalog\Controller\CustomApi;
class Order extends \Opencart\System\Engine\Model {
    public function getByCustomerID() {
	$this->load->model('checkout/order');
        $customer_id = 0;
        if (isset($this->request->get['customer_id'])) {
            $customer_id = $this->request->get['customer_id'];
        }

	$results = $this->model_checkout_order->getOrdersByCustomerID($customer_id);

	header('Content-Type: application/json; charset=utf-8');
        echo json_encode($results);
    }
}