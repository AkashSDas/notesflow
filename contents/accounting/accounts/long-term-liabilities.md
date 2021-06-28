---
title: Long Term Liabilities
description: Understand long term liabilities.
tags:
  - accounting
  - long-term-liabilities
  - liabilities
lastmod: 2021-06-26T10:41:06-05:00
publishdate: 2021-06-26T10:41:06-05:00
coverImageUrl: ""
coverGifUrl: ""
---

## Table of contents

## Introduction

---

Current liabilities are due within less than one year. These are initially booked at nominal value and not present value. While Long Term Liabilities are due in periods beyond one year. These are initially booked at present value of future cash payments.

After initial recognition, some liabilities can be marked to fair value, while most are recorded at amortized cost. As a result, liabilities can be mix of fair value and amortized cost.

## Common Types of Debt

---

> - **Bank Loan** - Borrow principal, make periodic interest payments, repay principal at end of loan.
> - **Mortage** - Borrow principal, make periodic interest payments over the loan period
> - **Corporate Bonds**
>   - Companies promise to pay periodic cash flows (`coupons`), plus a lump sum (`principal`) at maturity.
>   - Investors offer the company the present value of coupons and principal
>   - Investors can then trade the bond freely until maturity
>   - `Zero Coupons` - Company only pays lump sum at maturity

## Bonds Payable

---

Bonds payable are coupon bonds which means they are require semi-annual coupon payments plus payment of face value at maturity.

> **Elements and Maturity**
>
> - Price or Proceeds (PV) (What the company receives when they issue the bond to the public. That's going to be the same as the present value in a time value of money calculation.)
> - Face Value or Par Value (FV) (The amount that the bond is going to pay at maturity.)
> - Market interest rate or effective interest rate or yield-to-maturity (r) (That's the rate r that we're going to use to calculate present values. That's what rate the, the investors are willing to lend money to the company at.)
> - Coupon rate (stated in bond agreement)
> - Coupon payment (PMT) = face value \* coupon rate
> - Number of periods (n)
> - Because the bonds are semi-annual, double the number of periods and divide rates by 2

> - **Bond Price = Present Value of FV - Present Value of PMT** (FV here is Future Value)

## Discount and Premium Bonds

---

> - When bond is **issued at par** then coupon rate = effective (market) rate
> - But, companies can issue bonds with coupon payments of any amount, regardless of the market rate
> - When the coupon rate is below the market rate, the bond is referred to as a **discount bond**. Price is below the face value, therefore investors pay less for bond because coupon rate is less than current market rate.
> - When the coupon rate is above the market rate, the bond is referred to as a **permium bond**. Price is above the face value, therefore investors pay more for bond because coupon rate is greater than current market rate.

**Does this mean that I am getting a good deal if I am able to buy a bond at a discount?** a discount bond does not mean that you're getting a deal. All a discount bond means is that the proceeds are below the face value. But that's the case because the market interest rate is above the coupon rate. And that lower proceeds simply reflects the correct price based on the time value of money. You're not getting a deal with a discount bond, you're playing exactly the right amount based on the time value of money assuming current market rates.

## Effective Interest Method

---

> - Interest Expense only equals the coupon payment for bonds issued at par.
> - Interest Expense must be based on the **effective interest rates**
>   - Effective interest rate is the market rate in effect at the time of issuance
>   - The effective rate is not changed over the life of the bond, even when market interest rates change
>
> ```text
>   Interest Expense Journal Entry
>   Dr. Interest Expense (+E)       <Bonds Pay Bal x Effective Int Rate>
>   Dr. or Cr. Bonds Payable        <Plug>
>       Cr. Cash (-A)                   <Face Value x Coupon Rate>
> ```
>
> - **If Interest Expense does not equal Cash, there will be a Dr. or Cr. to Bonds Payable to balance entry**

The cash interest payment made by the company is not the same as interest expense. We use the interest rate in effect when the bond was issued, even if it was issued a long time ago and the interest rate has changed. And we might have to debit or credit the notes payable principal amount, even when we are not paying any principal.

> **Examples**
>
> **Bonds issued at par**
> Effective rate = 5%, Coupon rate = 5%, Proceeds = $10,000, Face Value = $10,000
>
> ```text
> Dr. Interest Expense (+E)  250 (10,000 x 0.025) <Bonds Pay Bal x Effective Int Rate>
>   Cr. Cash (-A)               250 (10,000 x 0.025) <Face Value x Coupon Rate>
> ```
>
> **Bonds issued at a discount**
> Effective rate = 6%, Coupon rate = 5%, Proceeds = $9,729, Face Value = $10,000
> Just like in Present Value, where Interest Rates go up then Present Values go down. Similarly here when the Effective rates go up the Proceeds go down
>
> ```text
> Dr. Interest Expense (+E)  292 (9,729 x 0.03) <Bonds Pay Bal x Effective Int Rate>
>   Cr. Bonds Payable (+L)      42 (plug)
>   Cr. Cash (-A)               250 (10,000 x 0.025) <Face Value x Coupon Rate>
> ```
>
> **Bonds issued at par**
> Effective rate = 4%, Coupon rate = 5%, Proceeds = $10,280, Face Value = $10,000
> Due to inverse relatiionship between effective rates and proceeds, here the effective rates went down so the proceeds will go up
>
> ```text
> Dr. Interest Expense (+E)  206 (10,000 x 0.02) <Bonds Pay Bal x Effective Int Rate>
> Dr. Bonds Payable (+L)     44 (plug)
>   Cr. Cash (-A)               250 (10,000 x 0.025) <Face Value x Coupon Rate>
> ```

**A zero-coupon bond is an extreme example of a discount bond**. Overview of how it works. So in a zero-coupon bond, you would borrow, say, $9,000 and then just pay it back $10,000 at maturity without making any coupons, coupon payments in the interim. So what it's going to look like on an amortization schedule is, there's going to be no cash payments as you go through the bond. So this interest expense will just be equal to the increase in bonds payable. And eventually, will increase the bonds payable up from $9,000 originally to $10,000, which is the cash payment that you make at maturity. So it works just the same, except that there's no cash payments every six months. There's just the repayment of what you owe at maturity.

## Accounting for a Discount Bond and Statement of Cash FLow

---

For bonds issued at a discount, part of the Interest Expense will be noncash each period. The noncash amount is equal to the plug to Bonds Payable.

```text
6/30/10     Dr. Interest Expense (+E)   292 (9729 x 0.03)
                Cr. Bonds Payable (+L)      42 (noncash interest)
                Cr. Cash (-A)               250 (10,000 x 0.025)
```

The noncash amount must be added back in the Operating section of the Statement of Cash Flow under the indirect method. This line is often called as **Amortization of Bond Discount**. So, if you're keeping score at home, that means we have to add back depreciation and amortization, losses on sales on investments and amortization of bond discount in the operating section of the SCF. So a quicker way to remember this is any noncash items have to be taken out in the indirect method for SCF. And then any gains or loses related to investing activities or financing activities have to be taken out, as well.

## Accounting for a Premium Bonds

---

Very few bonds are ever issued at a premium. The vast, vast, vast majority of bonds are either at a discount or at par.

## Retirement Before Maturity

---

This is about retiring a bond before the bond matures. So firms sometimes `retire` bonds prior to maturity if they have excess cash or as part of refinancing activities. The firms must buy the bonds back from investors at current market prices. The price the firm pays to buy back the bonds will typically be different from the book value of the bonds.

A gain/loss is recorded on income statement for the difference between the book value and the price of the bonds. This gain/loss is backed out of the Operating Section of Statement of Cash Flow under the indirect method because it is a Financing activity.

**Why can't the company just pay back the principal to retire the bond?** It seems logical that if you have a $10,000 bond, why not just give the investors $10,000 and be done with it? Well, that's the wrong amount. Because first of all, that $10,000 is how much you owe at maturity at some point in the future. As we've been talking about with time value of money, that 10,000 in future dollars is not worth necessarily, $10,000 today. In fact, it won't be worth $10,000 today if there's any kind of positive interest rate. So investors want what it's worth in today's dollars. Plus, if you're retiring it before maturity, investors are losing those coupon payments that they originally paid for when they bought the bond. And so they have to be made whole for the loss of those coupon payments. So our need to do a present value calculation to figure out exactly how much they'd have to pay to retire the bonds.

**Isn't an increase in interest rates bad news? Isn't a gain good news?** So when you retire a bond before maturity, you're essentially marking it to market. You're marking it to fair value. And anytime you mark liabilities to fair value, you enter this bizarro world of accounting, where in an increase in interest rates is bad news. But it shows up as a gain. A decline in interest rates is good news, that's what we saw earlier, but it shows up as a loss. So you can't view gains and losses on these fair value of liabilities or these retirements before maturity as good news or bad news, because they don't have that same interpretation. And what's even crazier is some companies voluntarily carry their long term debt on a fair value basis and so they have these bizarre gains and losses all the time.

## Fair Value Option

---

Under both the US GAAP and IFRS, companies have the option to measure long-term debt in fair (market) value rather than amortized cost using historical market interest rates. Under amortized cost, the book value of long-term debt on balance sheet can deviate substantially from the current fair market value of the debt.

Under the fair value option, compaines must adjust book value of long-term debt each period they reflect the current market value.

```text
Increase in market value:
    Dr. Unrealized loss (+E)        XXX
        Cr. Bonds Payable (+L)          XXX
```

```text
Decrease in market value:
    Dr. Bonds Payable (-L)          XXX
        Cr. Unrealized loss (+R)        XXX
```

Now what happens is financial services firms, like banks are the only ones that tend to do this in any large numbers. And that's because they're hedging other kinds of fair value explosion. The balance sheets of these unrealized gains or losses may cancel other unrealized gains and losses elsewhere, as everything's marked to market value. Non-financial firms, so firms that are not banks almost never elect this. Because they don't want their net income to be volatile based on changes in the value of their bonds, if they just intend to hold them and then pay them off at maturity.
