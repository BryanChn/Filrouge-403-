import axios from 'axios';

import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../assets/PandaFEED.png';
import {ButtonGroup, Divider} from 'react-native-elements';
import {Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../component/CustomInput';

export interface Products {
  id: number;
  name: string;
  minimum: number;
  essential: boolean;
  quantity: number;
}

export interface AddProduct {
  name: string;
  quantity: number;
  minimum: number;
  essential: boolean;
}

const ProductData: AddProduct = {
  name: '',
  quantity: 0,
  minimum: 0,
  essential: false || true,
};

const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  // get products from api
  useEffect(() => {
    axios
      .get('http:10.8.251.124:3000/products')
      .then(response => {
        setProducts(response.data);
      })

      .catch(error => {
        console.log('oups error notified------', error);
      });
  }, []);

  // add products to list
  const postProduct = () => {
    try {
      axios.post('http:10.8.251.124:3000/products', ProductData).then(resp => {
        if (resp.status === 201) {
          Alert.alert('Product added !');
          setProducts([...products, resp.data]);
        } else {
          Alert.alert('something goes wrong');
        }
      });
    } catch (error) {
      console.log('oups error notified------', error);
    }
    console.log('ProductData', ProductData);
  };
  const submitDataProduct = () => {
    postProduct();
    setModalVisible(!modalVisible);
  };
  return (
    <ScrollView style={styles.background}>
      <LinearGradient
        colors={['#95D793', '#282C34']}
        start={{
          x: 0.5,
          y: 2,
        }}
        end={{
          x: 1.5,
          y: 0,
        }}
        style={styles.box}>
        <View style={styles.root}>
          <Image style={[styles.Logo, {height: 535 * 0.3}]} source={Logo} />
          <View style={styles.title}>
            <Text style={styles.category}>Your products</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.bodyProduct}>
        {products?.map((item, key) => (
          <Divider
            key={key}
            orientation="horizontal"
            insetType="middle"
            inset={true}
            width={1}
            style={styles.divider}>
            <Text style={styles.text} key={key}>
              {item.name} quantity : {item.quantity}
            </Text>
          </Divider>
        ))}
      </View>
      <Button
        onPress={() => setModalVisible(true)}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#95D793', '#282C34'],
          start: {x: 0, y: 0.5},
          end: {x: 1, y: 2},
        }}
        style={styles.buttonAdd}
        icon={<MaterialCommunityIcons name="plus" />}></Button>
      <View style={styles.centeredView}>
        <Modal
          statusBarTranslucent={true}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textTitle}>Add product</Text>

              <CustomInput
                placeholder="Name"
                setValue={(text: string) => (ProductData.name = text)}
                onChangeText={(text: string) => {
                  ProductData.name = text;
                }}
              />

              <CustomInput
                placeholder="Quantity"
                setValue={(value: number) => (ProductData.quantity = value)}
                onChangeText={(value: number) => {
                  ProductData.quantity = value;
                }}
              />

              <CustomInput
                placeholder="Minimum"
                setValue={(value: number) => (ProductData.minimum = value)}
                onChangeText={(value: number) => {
                  ProductData.minimum = value;
                }}
              />

              <CustomInput
                placeholder="Essential, true or false"
                setvalue={(text: boolean) => (ProductData.essential = text)}
                onChangeText={(text: boolean) => {
                  ProductData.essential = text;
                }}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  submitDataProduct();
                }}>
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 160,
    paddingBottom: 200,
    paddingLeft: 50,
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  modalView: {
    width: '80%',
    margin: 10,
    backgroundColor: '#282c34',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#95D793',
    padding: 15,
    shadowColor: '#95D793',
    elevation: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,

    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#95D793',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonAdd: {
    position: 'relative',
    width: '45%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider: {
    backgroundColor: '#95D793',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    height: 35,
  },
  bodyProduct: {
    marginTop: '30%',
    height: '100%',
    padding: 15,
    flex: 1,
  },
  root: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  textTitle: {
    color: '#95D793',
    fontSize: 28,
    marginLeft: 20,
    textAlign: 'center',
  },
  title: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  Logo: {
    width: '30%',
    height: 20,
    maxHeight: 80,
    borderColor: '#8AC997',
    borderRadius: 180 / 1,
    overflow: 'hidden',
    borderWidth: 3,
  },
  box: {
    width: '100%',
    height: 80,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  productsbox: {
    backgroundColor: '#282C34',
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 10,
  },
  background: {
    backgroundColor: '#282c34',
  },
  text: {
    color: '#282C34',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  category: {
    color: '#95D793',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
