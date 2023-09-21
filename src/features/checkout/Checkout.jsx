import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import InputText from "../../ui/InputText";
import InputRadio from "../../ui/InputRadio";

import Summary from "../../ui/Summary";
import { useForm } from "react-hook-form";

const StyledBack = styled.div`
  padding: 50px 0;
`;

const StyledCheckOutSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

const StyledSection = styled.section`
  background-color: var(--light);
  padding: 3rem 3rem 1.2rem;
  border-radius: var(--default);
  margin-bottom: 2.5rem;
`;

const StyledGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const StyledGridPayment = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledLabelError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--dark);
`;

const StyledProductSummary = styled.section`
  background-color: var(--light);
  padding: 1.5rem;
  border-radius: var(--default);
`;

function Checkout() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      payment: "cash",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledBack>
            <Button onClick={() => navigate(-1)} variation="link">
              Go back
            </Button>
          </StyledBack>
          <StyledCheckOutSection>
            <div>
              <StyledSection>
                <Heading
                  as="h3"
                  color="dark"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  Checkout
                </Heading>
                <Heading type="subTitle">Billing details</Heading>
                <StyledGrid>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="name">Name</label>
                      {/* <span>Error</span> */}
                    </StyledLabelError>
                    <InputText
                      placeholder="Jessica Alba"
                      type="text"
                      id="name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="email">Email Address</label>
                      {/* <span>Error</span> */}
                    </StyledLabelError>
                    <InputText
                      placeholder="jes.alba@mail.com"
                      type="email"
                      id="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                    />
                  </div>
                </StyledGrid>
                <StyledGrid>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="phone">Phone Number</label>
                      {/* <span>Error</span> */}
                    </StyledLabelError>
                    <InputText
                      placeholder="+0123 456 987"
                      type="tel"
                      id="phone"
                      {...register("phone", { required: true })}
                    />
                  </div>
                </StyledGrid>
              </StyledSection>

              <StyledSection>
                <Heading type="subTitle">Shipping Info</Heading>

                <div>
                  <StyledLabelError>
                    <label htmlFor="address">Address</label>
                    {/* <span>Error</span> */}
                  </StyledLabelError>
                  <InputText
                    placeholder="123 Pinewood Str"
                    type="text"
                    id="address"
                    {...register("address", { required: true })}
                  />
                </div>

                <StyledGrid>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="zipcode">Zipcode</label>
                      {/* <span>Error</span> */}
                    </StyledLabelError>
                    <InputText
                      placeholder="14001"
                      type="number"
                      id="zipcode"
                      {...register("zipcode", { required: true })}
                    />
                  </div>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="city">City</label>
                      {/* <span>Error</span> */}
                    </StyledLabelError>
                    <InputText
                      placeholder="New York"
                      type="text"
                      id="city"
                      {...register("city", { required: true })}
                    />
                  </div>
                </StyledGrid>

                <StyledGrid>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="country">Country</label>
                      {/* <span>Error</span> */}
                    </StyledLabelError>
                    <InputText
                      placeholder="United States"
                      type="text"
                      id="country"
                      {...register("country", { required: true })}
                    />
                  </div>
                </StyledGrid>
              </StyledSection>
              <StyledSection>
                <Heading type="subTitle">Payment details</Heading>

                <StyledGridPayment>
                  <StyledLabelError>Payment Method</StyledLabelError>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="emoney"
                        name="payment"
                        value="emoney"
                        {...register("payment")}
                      />
                      <InputRadio htmlFor="emoney">e-Money</InputRadio>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
                        {...register("payment")}
                      />
                      <InputRadio htmlFor="cash">Cash on Delivery</InputRadio>
                    </div>
                  </div>
                </StyledGridPayment>
                <StyledGrid>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="eNumber">e-Money Number</label>
                      {/* <span>Error</span> */}
                    </StyledLabelError>
                    <InputText
                      placeholder="2654979"
                      type="number"
                      id="eNumber"
                    />
                  </div>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="ePin">e-Money PIN</label>
                      {/* <span>Error</span> */}
                    </StyledLabelError>
                    <InputText placeholder="4632" type="number" id="ePin" />
                  </div>
                </StyledGrid>
              </StyledSection>
            </div>
            <StyledProductSummary>
              <Heading as="h5" color="dark">
                Summary
              </Heading>
              <Summary />
            </StyledProductSummary>
          </StyledCheckOutSection>
        </form>
      </Container>
    </>
  );
}

export default Checkout;
