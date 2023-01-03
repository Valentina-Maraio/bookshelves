import React from "react";
import "../App.css";
import MenuButton from "../button/MenuButton";
import books from "../data/books.json";
import "./style/Explore.css";
import { Card, Button, Text, Grid, Row, Col } from "@nextui-org/react";

const Explore = () => {
  return (
    <>
      <div className="menu">
        <MenuButton />
      </div>
      <div className="App">
        <header className="App-explore">
          <h3>Explore</h3>
          <Grid.Container gap={2} justify="flex-start">
            {books?.books?.map((item) => {
              return (
                <>
                  <Grid xs={6} sm={3} key={item.id}>
                    <Card isPressable>
                      <Card.Header
                        css={{ position: "absolute", zIndex: 1, top: 5 }}
                      >
                        <Col>
                          <Button
                            flat
                            auto
                            rounded
                            css={{ color: "red", bg: "#94f9f026" }}
                          >
                            <Text
                              css={{ color: "inherit" }}
                              size={12}
                              weight="bold"
                              transform="uppercase"
                            >
                              Fav
                            </Text>
                          </Button>
                        </Col>
                      </Card.Header>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={item.copertina}
                          alt="no"
                          objectFit="cover"
                          width="100%"
                          height={140}
                        />
                      </Card.Body>
                      <Card.Footer
                        isBlurred
                        css={{
                          position: "absolute",
                          bgBlur: "#0f111466",
                          borderTop: "$borderWeights$light solid $gray800",
                          bottom: 0,
                          zIndex: 1,
                        }}
                      >
                        <Row>
                          <Col>
                            <Row>
                              <Col>
                                <Text color="#d1d1d1" size={12}>
                                  {item.author}
                                </Text>
                              </Col>
                            </Row>
                          </Col>
                          <Col>
                            <Row justify="flex-end">
                              <Button
                                flat
                                auto
                                rounded
                                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                              >
                                <Text
                                  css={{ color: "inherit" }}
                                  size={12}
                                  weight="bold"
                                  transform="uppercase"
                                >
                                  Info
                                </Text>
                              </Button>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid.Container>
        </header>
      </div>
    </>
  );
};

export default Explore;
