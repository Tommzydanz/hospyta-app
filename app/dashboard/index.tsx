import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  LightText,
  MediumText,
  MsgText,
  TitleText,
} from "@/components/StyledText";
import Notification from "@/assets/svgs/Notification.svg";
import Menu from "@/assets/svgs/Menu.svg";
import { useDrawer } from "../context/useDrawerContext";
import Colors from "@/constants/Colors";
import ToggleSwitch from "toggle-switch-react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import CalendarIcon from "@/assets/svgs/CalendarIcon.svg";
import Card from "@/components/Card";
import ShopItem from "@/components/ShopItem";
import PageIndicator from "@/components/PageIndicator";

const feeds = [
  { id: 1, image: require("@/assets/images/feed1.png") },
  { id: 2, image: require("@/assets/images/feed2.png") },
  { id: 3, image: require("@/assets/images/feed1.png") },
];

const medicalDevices = [
  {
    id: 1,
    name: "Temperature Checker",
    image: require("@/assets/images/medical_device.png"),
    price: 5000,
  },
  {
    id: 2,
    name: "Statoscope",
    image: require("@/assets/images/medical_device.png"),
    price: 15000,
  },
  {
    id: 3,
    name: "Toothache Soothe med",
    image: require("@/assets/images/medical_device.png"),
    price: 15000,
  },
];

const medicineData: {
  id: number;
  name: string;
  image: any;
  price: number;
  discount?: string;
}[] = [
  {
    id: 1,
    name: "Panadol (50mg) 200ta",
    image: require("@/assets/images/drug1.png"),
    price: 5000,
    discount: "46%",
  },
  {
    id: 2,
    name: "Toothache Soothe Med",
    image: require("@/assets/images/drug2.png"),
    price: 15000,
    discount: "16%",
  },
  {
    id: 3,
    name: "Toothache Soothe Med",
    image: require("@/assets/images/drug2.png"),
    price: 15000,
    discount: "",
  },
];

const news: {
  id: number;
  image: any;
  newstag: string;
  headline: string;
}[] = [
  {
    id: 1,
    image: require("@/assets/images/news1.png"),
    newstag: "r/worldnews",
    headline: "Getting The Upper \nHand On Asthma \nAllergy",
  },
  {
    id: 2,
    image: require("@/assets/images/news2.png"),
    newstag: "r/worldnews",
    headline: "Skin Cancer Prevention \n5 Ways To Protect \nYourself",
  },
];

const DashboardHome = () => {
  const { toggleDrawer } = useDrawer();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const cardWidth = Dimensions.get("window").width * 0.8;

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / cardWidth);
    setCurrentCardIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require("@/assets/images/avatar.png")} />
        <View style={{ marginLeft: 12 }}>
          <TitleText style={styles.titleText}>Welcome Dr,</TitleText>
          <MsgText style={styles.subMessage}>
            What do you want to {"\n"} do today?
          </MsgText>
        </View>
        <Notification style={{ marginLeft: 26 }} />
        <TouchableOpacity onPress={toggleDrawer}>
          <Menu style={{ marginLeft: 17 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          pagingEnabled
          snapToInterval={334 + 17} // Add this line
          decelerationRate="fast"
        >
          <Card
            baseColor={Colors.light.purple_200}
            style={{ paddingTop: 27, paddingLeft: 27, marginRight: 17 }}
            leftContent={
              <View
                style={{
                  backgroundColor: "#FFFFFF24",
                  padding: 4,
                  paddingVertical: 10,
                  borderRadius: 15,
                }}
              >
                <MsgText
                  style={{
                    textAlign: "center",
                    color: Colors.light.white,
                    paddingHorizontal: 9,
                    lineHeight: 14,
                  }}
                >
                  29{"\n\n"}Tue
                </MsgText>
                <MsgText
                  style={{
                    textAlign: "center",
                    marginTop: 8,
                    paddingTop: 8,
                    fontSize: 8,
                    borderTopWidth: 1,
                    borderTopColor: Colors.light.white,
                    color: Colors.light.white,
                  }}
                >
                  2:00PM
                </MsgText>
              </View>
            }
            mainContent={
              <View style={{ marginTop: 6 }}>
                <MsgText
                  style={{
                    fontSize: 13,
                    color: Colors.light.white,
                  }}
                >
                  Pending appointment
                </MsgText>
                <TitleText
                  style={{
                    fontSize: 17,
                    color: Colors.light.white,
                    marginVertical: 8,
                  }}
                >
                  Tanvii Ahmed
                </TitleText>
                <MsgText style={{ fontSize: 13, color: Colors.light.gray }}>
                  High Blood Pressure
                </MsgText>
                <View
                  style={[
                    styles.row,
                    {
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      marginBottom: 10,
                      marginTop: 11,
                      marginLeft: 34,
                    },
                  ]}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("@/assets/images/timer.png")} />
                    <MsgText
                      style={{
                        fontSize: 10,
                        color: Colors.light.white,
                        marginLeft: 5,
                      }}
                    >
                      0:01:20
                    </MsgText>
                  </View>

                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <MediumText style={styles.text}>View patient</MediumText>
                    <FontAwesome6
                      name="arrow-right-long"
                      size={12}
                      color={Colors.light.purple}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            }
          />
          <Card
            baseColor={Colors.light.yellow}
            backgroundColor={Colors.light.yellow}
            style={{
              paddingTop: 14,
              paddingLeft: 14,
            }}
            leftContent={
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("@/assets/images/ellipse.png")} />
                  <MsgText
                    lightColor={Colors.light.white}
                    style={{ fontSize: 12 }}
                  >
                    108,651 Virtual consultations
                  </MsgText>
                </View>
                <TitleText
                  lightColor={Colors.light.white}
                  style={{ fontSize: 16, marginTop: 6 }}
                >
                  Deliver hassle-free care {"\n"}with Hospyta{" "}
                </TitleText>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 37,
                  }}
                >
                  <MediumText
                    style={[
                      styles.text,
                      {
                        color: Colors.light.white,
                        fontSize: 12,
                        paddingRight: 5,
                      },
                    ]}
                  >
                    Set Schedule Now
                  </MediumText>
                  <FontAwesome6
                    name="arrow-right-long"
                    size={12}
                    color={Colors.light.white}
                  />
                </TouchableOpacity>
              </View>
            }
            mainContent={
              <Image
                source={require("@/assets/images/doc.png")}
                style={{ top: -30, right: 30, alignItems: "flex-end" }}
              />
            }
          />
          <Card
            baseColor={Colors.light.blue}
            backgroundColor={Colors.light.blue}
            style={{ paddingTop: 22, paddingLeft: 29, paddingRight: 22 }}
            mainContent={
              <View>
                <MediumText lightColor={Colors.light.gray}>Balance</MediumText>
                <TitleText
                  style={{
                    fontSize: 36,
                    color: Colors.light.white,
                    marginTop: 10,
                  }}
                >
                  $13,533.00
                </TitleText>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <MediumText
                    style={[
                      styles.text,
                      {
                        color: Colors.light.white,
                        fontSize: 12,
                        marginRight: 12,
                        marginTop: 12,
                      },
                    ]}
                  >
                    Go to wallet balance
                  </MediumText>
                  <FontAwesome6
                    name="arrow-right-long"
                    size={12}
                    color={Colors.light.white}
                  />
                </TouchableOpacity>
              </View>
            }
          />
        </ScrollView>
        <PageIndicator
          count={3}
          current={currentCardIndex}
          activeColor={Colors.light.blue_fade}
          inactiveColor={Colors.light.gray}
          size={10}
          style={{ marginTop: 16 }}
        />
      </View>
      <View style={styles.availableToggler}>
        <MsgText style={styles.availableText}>I am Available</MsgText>
        <ToggleSwitch
          isOn={true}
          onColor={Colors.light.green}
          offColor={Colors.light.gray}
          size="medium"
          onToggle={() => {}}
        />
      </View>
      <View style={styles.appointmentCard}>
        <CalendarIcon color={Colors.light.text} />
        <MsgText style={styles.appText}>Schedule appointment calender</MsgText>
        <FontAwesome6 name="arrow-right-long" size={24} />
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <TitleText style={{ fontSize: 16 }}>Community Feed</TitleText>
          <MsgText style={styles.viewAll}>View all</MsgText>
        </View>
        <FlatList
          data={feeds}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{ marginRight: 24, marginTop: 24 }}
            />
          )}
        />
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <TitleText style={{ fontSize: 16 }}>
            Shop for Medical Devices
          </TitleText>
          <MsgText style={styles.viewAll}>View all</MsgText>
        </View>
        <FlatList
          data={medicalDevices}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ShopItem
              image={item.image}
              name={item.name}
              price={item.price}
              discountPercent={""}
            />
          )}
        />
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <TitleText style={{ fontSize: 16 }}>Shop for Medicines</TitleText>
          <MsgText style={styles.viewAll}>View all</MsgText>
        </View>
        <FlatList
          data={medicineData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ShopItem
              image={item.image}
              name={item.name}
              price={item.price}
              discountPercent={item.discount ? `${item.discount} off` : ""}
              style={[
                styles.discountContainer,
                item.discount && { backgroundColor: Colors.light.text },
              ]}
            />
          )}
        />
      </View>
      <View>
        <View style={[styles.section, styles.adsBanner]}>
          <View style={[styles.row, { alignItems: "center" }]}>
            <MsgText style={styles.adsTitle}>Amartem {"\n"}2201</MsgText>
            <View>
              <LightText style={{ color: Colors.light.white, fontSize: 14 }}>
                ₦ <MediumText style={styles.adsPrice}> 2,000</MediumText>
              </LightText>
              <MsgText
                style={{
                  color: Colors.light.gray,
                  fontSize: 14,
                  marginTop: 10,
                }}
              >
                ₦{" "}
                <MsgText
                  style={{
                    color: Colors.light.gray,
                    fontSize: 14,
                    textDecorationLine: "line-through",
                    marginTop: 10,
                  }}
                >
                  12,000
                </MsgText>
              </MsgText>
            </View>
          </View>
          <MsgText
            style={{ color: Colors.light.white, fontSize: 14, marginTop: 4 }}
          >
            For malaria and Fever {"\n"}made for both.
          </MsgText>
          <Image
            source={require("@/assets/images/drug_main.png")}
            style={{ alignSelf: "center", marginTop: 42 }}
          />
        </View>
        <PageIndicator
          count={3}
          current={currentCardIndex}
          activeColor={Colors.light.blue}
          inactiveColor={Colors.light.gray}
          size={14}
          style={{ marginTop: 25 }}
        />
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <TitleText style={{ fontSize: 16 }}>News Feed</TitleText>
          <MsgText style={styles.viewAll}>View all</MsgText>
        </View>
        {news.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              paddingBottom: 23,
            }}
          >
            <Image source={item.image} />
            <View
              style={{
                marginLeft: 20,
                borderBottomWidth: 1,
                borderBottomColor: Colors.light.gray_fade,
              }}
            >
              <LightText style={{ fontSize: 14 }}>{item.newstag}</LightText>
              <MsgText style={{ fontSize: 18 }}>{item.headline}</MsgText>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DashboardHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 24,
    marginTop: 27,
    marginLeft: 25,
    flexDirection: "row",
  },
  titleText: {
    fontSize: 18,
  },
  subMessage: {
    textAlign: "justify",
    fontSize: 10,
  },
  cardContainer: {
    minHeight: 169,
    marginHorizontal: 16,
  },
  availableToggler: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 36,
    padding: 20,
    borderRadius: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#3EB61B14",
    backgroundColor: Colors.light.green_fade,
  },
  availableText: {
    fontSize: 14,
    color: Colors.light.green,
  },
  appointmentCard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 36,
    padding: 20,
    borderRadius: 13,
    backgroundColor: Colors.light.gray_fade,
  },
  appText: {
    fontSize: 12,
    lineHeight: 11,
    marginHorizontal: 13,
  },
  section: {
    marginTop: 49,
    marginHorizontal: 30,
  },
  viewAll: {
    color: Colors.light.sky_blue,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  discountContainer: {
    top: 12,
    left: 6,
    width: 55,
    padding: 5,
    borderRadius: 4,
  },
  text: {
    color: Colors.light.purple,
    fontSize: 10,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: "50%",
    alignSelf: "flex-end",
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: Colors.light.white,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  adsBanner: {
    backgroundColor: Colors.light.blue,
    borderRadius: 12,
    width: "85%",
    aspectRatio: 1,
    paddingLeft: 19,
    paddingRight: 27,
    paddingTop: 34,
    shadowColor: Colors.light.blue,
  },
  adsTitle: {
    color: Colors.light.white,
    fontSize: 27,
  },
  adsPrice: {
    color: Colors.light.white,
    fontSize: 20,
  },
});
