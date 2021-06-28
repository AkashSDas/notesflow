---
title: Time Value of Money
description: Understand about time value of money in future, past and also about annuities.
tags:
  - accounting
  - time-value-of-money
lastmod: 2021-06-26T07:41:06-05:00
publishdate: 2021-06-26T07:41:06-05:00
coverImageUrl: ""
coverGifUrl: ""
---

## Table of contents

## Introduction

---

We say that money has time value because the value of dollar today is not same as the value of a dollar in the past or in the future.

The time value of money differs because of inflation, interest rates, risk, as these factors combine to determine the `discount rate` or `rate of return`.

Whenever we pay or receive cash in the future, we must adjust the cash flow to the same value (ususally, today's value). Much like you have to adjust foreign currencies to the US dollar (or liters to gallons) to make cross-country comparisons, you have to adjust future dollars or past dollars to today's value to make across-time comparisons.

## Compound Interest

---

> - FV = PV x (1 + r)^n

The Present Value (PV) of what you invest today at an interest rate r grows by (1 + r)^n to earn a Future Value (FV) in n years from now.

This same formula can be used to compute past value instead of future value. So while computing past value we have to use Present Value as Past Value and Future Value as Present Value.

> **Elements**
>
> - PV = Present Value (value before effects of interest or discounting)
> - FV = Present Value (value after effects of interest or discounting)
> - r = interest rates, discount rate or rate of return
> - n = Number of periods between present value and future value

## Future Value Calculations

---

Multiple ways to find future values.

> - FV = PV x (1 + r)n
> - FV = PV x (Table 1 factor of n, r)
> - = -FV(r, n, 0, PV) in Excel (r of 10% would be 0.10)

Future Value (FV) is positively related to the rate of return (r) and the number of periods (n).

## Present Value

---

What if we know the Future Value but don't know the Present Value.

> - FV = PV x (1 + r)^n
> - PV = FV x (1 + r)^n

### Present Value Calculations

---

> - PV = FV x (1 + r)^n
> - PV = FV x (Table 2 factor for n, r)
> - = -PV(r, n, 0, FV) in Excel (r of 10% would be 0.10)

Present Value (PV) is inversely related to the rate of return (r) and the number of periods (n).

### Net Present Value and Decision Making

---

The application of Present Value Calculation is used in Net Preset Value, which is often used to make decision about how you invest your money in different projects.

> - Layout a timeline of the cash inflows and outflows
> - Convert the cash flows in each period to the present values
> - Add up the present values
> - Net Present Value is the sum of the present values (Often involves a cash outflow in today's dollars and cash inflows in future dollars, which must discounted back to present value)

Consider the below example: Let's say we have 4years horizon and 2 projects

```text
Cash Flows:     0       1       2       3       4
Project A:      -100    0       0       0       200
Project B:      -100    80      50      30      0
```

-100 represents that 100 is invested.

**Which project you'll invest in?** We need to convert to present value before we can make any decisions. We have to put all of these dollars into present values, because we can't compare them directly. Again think about if these were different currencies. If you invested $100 and got a certain amount of Yen back, but another project you invested $100 and got a certain amount of Euros back. You couldn't just add up the numbers and decide which was better. You'd have to translate everything into dollars. Well, dollars in years one, two, three, and four are not the same as today's dollars, so first we have to translate everything into today's dollars. Then we can add it up, and decide which project is better.

```text
PV @10%:        0       1       2       3       4
Project A:      -100    0       0       0       137
Project B:      -100    73      41      23      0
```

```text
NPV:            0       1       2       3       4
Project A:      -100    0       0       0       137     = $37
Project B:      -100    73      41      23      0       = $37
```

So you would not care which one you would invest in. They're both going to give you the same net present value. They both have the same value, when you translate all of the cash flows into today's dollars.

## Annuities

---

An Annuity is a constant stream of future cash flows.

> - **Ordinary Annuity** (annuity in arrears) - Payments are at the end of a period
> - **Annuity Due** (or in advance) - Payments are at the start of a period

> Example: PV of an Ordinary Annuity of $500 for three periods at an interest rate of 8%
>
> PV of 500% one year from now at 8% = 500% x 0.92593 (present value table rate)
> \+ PV of 500% one year from now at 8% = 500% x 0.85734 (present value table rate)
> \+ PV of 500% one year from now at 8% = 500% x 0.79383 (present value table rate)
> = $500 x 2.57710 = $1,288.55

> **Elements**
>
> - PV = Present Value (value before effects of interest or discounting)
> - FV = Present Value (value after effects of interest or discounting)
> - r = interest rates, discount rate or rate of return
> - n = Number of periods between present value and future value
> - PMT = Periodic payment for an annuity. Unless specified assume it is received at the end of each period

### Present Value of Annuities Calculations

---

> - PV = PMT/r x [1 - 1/(1+r)^n]
> - PV = PMT x (Table of 4 factor for n, r)
> - = -PV(r, n, PMT, 0) in Excel (r of 10% would be 0.10)

> Examples:
>
> If this course gets you an extra $5000 per year in salary until retirement, how much would you be willing to pay for it?
> Assume the following:
>
> - 20 years to retirement (n)
> - Inflation (r) is excepted to be 15% (compounded annually)
>
> - PV = 5000 x (Table 4 factor 20, 15%)
> - PV = 5000 x 6.2593
> - PV = $31,297
>
> Consider this alternative, What if the inflation rate was only 5%
> Assume the following:
>
> - Extra salary per year (PMT) is $5000
> - 20 years to retirement (n)
> - Inflation (r) is excepted to be 5% (compounded annually)
>
> - PV = 5000 x (Table 4 factor 20, 15%)
> - PV = 5000 x 12.4622
> - PV = $62,311

Present Value (PV) is inversely related to r. PV is positively related to PMT and n.

### Future Value of Annuities Calculations

---

> - FV = PMT x (Table of 3 factor for n, r)
> - = -FV(r, n, PMT, 0) in Excel (r of 10% would be 0.10)

> Examples:
>
> If this course gets you an extra $5000 per year in salary until retirement, how much is this worth when you retire?
> Assume the following:
>
> - 20 years to retirement (n)
> - Inflation (r) is excepted to be 15% (compounded annually)
>
> - FV = 5000 x (Table 3 factor 20, 15%)
> - FV = 5000 x 102.4436
> - FV = $512,218
>
> Recall that investing $10,000 in stock market with 15% r for 20 years:
> FV = 10,000 x 16.3665 = $163,635
>
> **So getting the extra 5,000 year in salary is worth much more to you in the future. Then would be just investing $10,000 into the stock market and letting it grow.**

## Different Compounding Periods

---

> - So far we have done only annual compounding.
> - What about semi-annual compounding? (Bonds) - Divide the annual rate (r) by 2 and multiply years (n) by 2
> - What is PV of $1,000, 5-year, 12% savings bond with...
>   - Annual compounding? - PV = 1,000 x (Table 2 factor for 5, 12%) = $567
>   - Semi-annual compounding? - PV = 1,000 x (Table 2 factor for 10, 6%) = $558
>   - Monthly compounding? - PV = 1,000 x (Table 2 factor for 60, 1%) = $550
>   - Daily compounding? - PV = 1,000 x (Table 2 factor for 1825, 0.033%) = $549

Continuous compounding literally means that interest is always being compounded. The way it was calculated is. If you know in mathematics the number e. But if you take e raised to the interest rate, that gives you what the interest would be if it was compounded all the time. But as you can see on the slide, as we did more frequent compounding periods, it had less and less of effect on present value.

> **Example: Price of a Bond**
>
> How much would you pay to buy a newly issued 3years bond that pays coupon payments of $25 every six-months and $10,000 at maturity. The current market interest rate is 5%.
> PV calculation to get bond price
>
> - With semi-annual payments, double the number of periods (3 x 2 = 6) and divide the interest rates (5 / 2 = 2.5%)
> - PV of payment at maturity
>   - PV=?, FV=10,000, r=0.025, n=6, PMT=0
>   - PV = %8,623
> - Present value of semi-annual payment
>   - PV=?, FV=10,000, r=0.025, n=6, PMT=250
>   - PV = %1,377
> - Price = $10,000 (8,623 + 1,377)

**The formula provides both payment and future value.**
