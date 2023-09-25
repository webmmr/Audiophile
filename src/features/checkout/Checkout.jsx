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

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    padding-bottom: 50px;
  }
`;

const StyledSection = styled.section`
  background-color: var(--white);
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

const StyledError = styled.span`
  color: #cd2c2c;
`;

const StyledProductSummary = styled.section`
  background-color: var(--white);
  height: fit-content;
  padding: 1.5rem;
  border-radius: var(--default);
`;

function Checkout() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      payment: "cash",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

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
                      <StyledError>{errors?.name?.message}</StyledError>
                    </StyledLabelError>
                    <InputText
                      placeholder="Jessica Alba"
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                    />
                  </div>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="email">Email Address</label>
                      <StyledError>{errors?.email?.message}</StyledError>
                    </StyledLabelError>
                    <InputText
                      placeholder="jes.alba@mail.com"
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
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
                      <StyledError>{errors?.phone?.message}</StyledError>
                    </StyledLabelError>
                    <InputText
                      placeholder="+0123 456 987"
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                  </div>
                </StyledGrid>
              </StyledSection>

              <StyledSection>
                <Heading type="subTitle">Shipping Info</Heading>

                <div>
                  <StyledLabelError>
                    <label htmlFor="address">Address</label>
                    <StyledError>{errors?.address?.message}</StyledError>
                  </StyledLabelError>
                  <InputText
                    placeholder="123 Pinewood Str"
                    type="text"
                    id="address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                </div>

                <StyledGrid>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="zipcode">Zipcode</label>
                      <StyledError>{errors?.zipcode?.message}</StyledError>
                    </StyledLabelError>
                    <InputText
                      placeholder="14001"
                      type="number"
                      id="zipcode"
                      {...register("zipcode", {
                        required: "Zipcode is required",
                      })}
                    />
                  </div>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="city">City</label>
                      <StyledError>{errors?.city?.message}</StyledError>
                    </StyledLabelError>
                    <InputText
                      placeholder="New York"
                      type="text"
                      id="city"
                      {...register("city", { required: "City is required" })}
                    />
                  </div>
                </StyledGrid>

                <StyledGrid>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="country">Country</label>
                      <StyledError>{errors?.country?.message}</StyledError>
                    </StyledLabelError>
                    <InputText
                      placeholder="United States"
                      type="text"
                      id="country"
                      {...register("country", {
                        required: "Country is required",
                      })}
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
                      <label htmlFor="enumber">e-Money Number</label>
                      <StyledError>{errors?.enumber?.message}</StyledError>
                    </StyledLabelError>
                    <InputText
                      placeholder="2654979"
                      type="number"
                      id="enumber"
                      name="enumber"
                      {...register("enumber")}
                    />
                  </div>
                  <div>
                    <StyledLabelError>
                      <label htmlFor="epin">e-Money PIN</label>
                      <StyledError>{errors?.epin?.message}</StyledError>
                    </StyledLabelError>
                    <InputText
                      placeholder="4632"
                      type="number"
                      id="epin"
                      name="epin"
                      {...register("epin")}
                    />
                  </div>
                </StyledGrid>
              </StyledSection>
            </div>
            <StyledProductSummary>
              <Heading as="h5" color="dark">
                Summary
              </Heading>
              <Summary isValid={isValid} />
            </StyledProductSummary>
          </StyledCheckOutSection>
        </form>
      </Container>
    </>
  );
}

export default Checkout;
